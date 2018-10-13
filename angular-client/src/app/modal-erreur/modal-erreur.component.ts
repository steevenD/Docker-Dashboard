import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogDataError {
  erreur: string;
  exemple: boolean;  
}

@Component({
  selector: 'app-modal-erreur',
  templateUrl: './modal-erreur.component.html',
  styleUrls: ['./modal-erreur.component.css']
})
export class ModalErreurComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalErreurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataError) {}

  ngOnInit() {
  }

  hancleClickClose(){
    this.dialogRef.close();
  }

}
