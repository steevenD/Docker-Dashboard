import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  API = 'http://localhost:3000';
  displayLoad = false;
  
  images: any[] = [];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.getAllImages();
  }

  getAllImages() {
    this.displayLoad = true;    
    this.http.get(`${this.API}/images`)
    .map(res => JSON.parse(JSON.stringify(res)))
    .subscribe(images => {
        for (let i =0; i < images.length; i++){
          if(images[i].RepoTags != '<none>:<none>'){
            this.images.push(images[i]);
          }
        }
      },
    (err)=> console.error(err),
    ()=> this.displayLoad = false
  )};
}
