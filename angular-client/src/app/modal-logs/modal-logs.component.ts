import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  logs: string;
}

@Component({
  selector: 'app-modal-logs',
  templateUrl: './modal-logs.component.html',
  styleUrls: ['./modal-logs.component.css']
})
export class ModalLogsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalLogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

  hancleClickClose(){
    this.dialogRef.close();
  }

}
