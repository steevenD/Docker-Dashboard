// Import dependencies
const express = require('express');
const router = express.Router();
var stream = require('stream');


/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

/* GET all containers. */
router.get('/containers', (req, res) => {
    var Docker = require('dockerode');
    var docker = new Docker(); //defaults to above if env variables are not used
    docker.listContainers({ all: true }, function (err, containers) {
        console.log('COUNT CONTAINERS: ' + containers.length);
        if(!err){
            res.status(200).json(containers);
        }else {
            res.status(400).json(err);            
        }
        
    });
 });

 router.get('/images', (req, res) => {
    var Docker = require('dockerode');
    var docker = new Docker(); //defaults to above if env variables are not used
    docker.listImages({ all: true }, function (err, images) {
        if(err){
            res.status(400).json(err);                        
        }else{
            res.status(200).json(images);
        }
    });
 });
/* GET one users. *//*
router.get('/users/:id', (req, res) => {
    User.findById(req.param.id, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});*/

/* Create a user. */

router.post('/container/create', (req, res) => {
    console.log('req', req.body);
    var Docker = require('dockerode');
    var docker = new Docker({socketPath: '/var/run/docker.sock'});
    const portExport = `${req.body.portExport}`.toString();
    const portHost = `${req.body.portHost}`.toString();
    let name = req.body.name;
    
    docker.pull(
        req.body.image,
        {},
        function(err, stream) {
          docker.modem.followProgress(stream, onFinished, onProgress);
          function onFinished(err, output) {
            var PortBindings = {};
            var binds = req.body.volumeMachineHote && req.body.volumeConteneur ? [req.body.volumeMachineHote.concat(":").concat(req.body.volumeConteneur)]: [];
            var variablesEnv = [];
            console.log('------------------------VAR', req.body.variables)
            for (let i=0; i < req.body.variables.length; i++){
                variablesEnv.push(req.body.variables[i].variable);
            }
            console.log('------------------------VAR2', variablesEnv)
            
            const newContainer = {
              
                Image: req.body.image,
                name: name,
                Env: variablesEnv,
                Cmd: ['/bin/sh', '-c', "trap 'echo no' TERM; while true; do sleep 1; done"],
                ExposedPorts: {
                    [portExport]: {}
                },
                HostConfig: {
                    Binds: 
                        binds
                    ,
                    Memory: parseInt(req.body.ram * 1048576),
                    NanoCpus: parseInt(req.body.cpu * 10000000),
                    PortBindings: {
                        [portExport]: [{
                            HostPort: portHost,
                        }]
                    },            
                    
                },
          
              };
              console.log('------------JSON---------', newContainer);
              console.log('------------JSON---------', newContainer.HostConfig.PortBindings);
              
            docker.createContainer(
                newContainer,
              function(err, container) {
                  console.log('ERREUR -------------- W', err);
                if (!err) {
                    console.log('CONTENEUR', container);
                    container.start(function (err, data) {
                        console.log('---------START errr----', err)
                        console.log('---------START dataaa----', data)
                        
                        res.redirect("/containers");
                        if(err){
                            res.status(400).json(err);                            
                        }
                    });
                    
                } else {
                  console.log('ERREUR CREATE----------', err);
                  res.status(400).json(err);
                }
              }
            );
          }
          function onProgress(event) {}
          if(err){
            res.status(400).json(err);            
          }
        },
        {}
      );
     
    
});

router.post('/container/remove', (req, res) => {
    console.log('req', req.body);
    var Docker = require('dockerode');
    var docker = new Docker();
    const id = req.body.id;
    var container = docker.getContainer(id);
    container.remove().then(function(data) {
        res.status(200).json(data);
    });
    
});

router.post('/container/stop', (req, res) => {
    console.log('req', req.body);
    var Docker = require('dockerode');
    var docker = new Docker();
    const id = req.body.id;
    var container = docker.getContainer(id);
    container.kill().then(function(data) {
        res.status(200).json(data);
    });
    
});

/* GET one containers. */
router.get('/container/:id', (req, res) => {
    var Docker = require('dockerode');
    var docker = new Docker({ socketPath: '/var/run/docker.sock' });
    var container = docker.getContainer(req.params.id);
    container.inspect(function (err, data) {
        res.status(200).json(data);
    });

});

/* GET container's logs. */
router.get('/container/:id/logs', (req, res) => {
    var Docker = require('dockerode');
    var docker = new Docker({ socketPath: '/var/run/docker.sock' });
    console.log("container id : ", req.params);
    var container = docker.getContainer(req.params.id);
    //console.log(container);
    var result = '';
    var logStream = new stream.PassThrough();
    logStream.on('data', function (chunk) {
        console.log(chunk.toString('utf8') + "\n");
        result += chunk.toString('utf8')+ "\n" ;
    });
    container.logs({
        follow: true,
        stdout: true,
        stderr: true,
        tail: 300
    }, function (err, stream) {
        container.modem.demuxStream(stream, logStream, logStream);
        stream.on('end', function () {
            logStream.end('-------Fin du log');
            res.status(200).json(result);
        });

        setTimeout(function () {
            stream.destroy();
        }, 2000);
    });
});

module.exports = router;