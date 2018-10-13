import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'q';
import { ModalLogsComponent } from '../modal-logs/modal-logs.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';
import { ModalErreurComponent } from '../modal-erreur/modal-erreur.component';

@Component({
  selector: 'app-conteneurs',
  templateUrl: './conteneurs.component.html',
  styleUrls: ['./conteneurs.component.css']
})
export class ConteneursComponent implements OnInit {

  API = 'http://localhost:3000';
  displayLoad = false;
  
  containers: any[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {}
  
  ngOnInit() {
    this.getAllContainers();   
  }

  handleClickDetailsConteneur(id: string, port){
    this.displayLoad = true;    
    this.http.get(`${this.API}/container/${id}`)
    .subscribe( (details) => {
      this.openDialogDetail(details ,port);
      this.displayLoad = false;
    });
  }

  handleClickLogsConteneur(id: string){
    this.displayLoad = true;        
    this.http.get(`${this.API}/container/${id}/logs`)
    .subscribe( (val) => {
      this.openDialog(val);
      this.displayLoad = false;
    })
    
  }

  openDialog(logs): void {
    const dialogRef = this.dialog.open(ModalLogsComponent, {
      width: '850px',
      height: '500px',
      data: {logs: logs}
    });
  }

  openDialogDetail(details, port) {
    const dialogRef = this.dialog.open(ModalDetailsComponent, {
      width: '850px',
      height: '500px',
      data: {details: details, port: port}
    });
  }

  openDialogErreur(erreur) {
    const dialogRef = this.dialog.open(ModalErreurComponent, {
      height: '200px',
      data: {erreur: erreur}
    });
  }


  displayStopOrDelete(status : string){
    if((status.substr(0,2) == 'Up')){
      return true;
    } else {
      return false;
    }
  }

  getAllContainers() {
    this.displayLoad = true;    
    this.http.get(`${this.API}/containers`)
    .map(res => JSON.parse(JSON.stringify(res)))
    .subscribe(containers => {      
        this.containers = containers;
        this.displayLoad = false;       
      })
  }

  handleClickStopConteneur(idConteneur: string){
    this.displayLoad = true;    
    this.http.post(`${this.API}/container/stop`, {id : idConteneur})
    .subscribe( ()=> {
      this.getAllContainers();
      this.displayLoad = false;
      }
    )
  }

  handleClickRemoveConteneur(idConteneur: string){
    this.displayLoad = true;    
    this.http.post(`${this.API}/container/remove`, {id : idConteneur})
    .subscribe( 
      ()=> {
        this.getAllContainers();
        this.displayLoad = false
      }
     )
  }
}
