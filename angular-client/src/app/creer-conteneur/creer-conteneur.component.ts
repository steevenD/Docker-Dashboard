import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalErreurComponent } from '../modal-erreur/modal-erreur.component';

@Component({
  selector: 'app-creer-conteneur',
  templateUrl: './creer-conteneur.component.html',
  styleUrls: ['./creer-conteneur.component.css']
})
export class CreerConteneurComponent implements OnInit {
  fGroup: FormGroup;
  API = 'http://localhost:3000';
  displayLoad = false;
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder, public dialog: MatDialog) {}
  
  ngOnInit() {
    this.fGroup = new FormGroup({
      image: new FormControl(''),
      name: new FormControl(''),
      ram: new FormControl(''),
      cpu: new FormControl(''),
      volumeMachineHote: new FormControl(''),
      volumeConteneur: new FormControl(''),
      portHost: new FormControl(''),
      portExport: new FormControl(''),
      variables: this.fb.array([])
      
    });  
  }

  handleClickAddContainer(){
    console.log('click ma gg')
    this.displayLoad = true;
    console.log(this.fGroup.value);
    const value = this.fGroup.value;

      this.http.post(`${this.API}/container/create`, value )
      .toPromise()
      .then(()=>{
        this.displayLoad = false;
        this.router.navigate(['conteneurs']);
      })
      .catch(err => {
        console.error(err); 
        this.displayLoad = false;
        this.openDialogErreur(err.message);
      })
  }

  openDialogErreur(erreur) {
    const dialogRef = this.dialog.open(ModalErreurComponent, {
      height: '400px',
      data: {erreur: erreur, exemple: true}
    });
  }
}
