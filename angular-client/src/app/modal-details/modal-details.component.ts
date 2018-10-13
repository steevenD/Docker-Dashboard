import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalLogsComponent } from '../modal-logs/modal-logs.component';

export interface DialogDetail {
  details: any;
  port
}
@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalLogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDetail) {}

  ngOnInit() {
    }

  hancleClickClose(){
    this.dialogRef.close();
  }
  


}
