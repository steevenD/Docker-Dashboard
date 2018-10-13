import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

export class DeleteVariableEventArg {
  constructor(public indexVariable: number) {
  }
}

@Component({
  selector: 'app-variable-env',
  templateUrl: './variable-env.component.html',
  styleUrls: ['./variable-env.component.css']
})
export class VariableEnvComponent implements OnInit {

  @Input()
  fGroup: FormGroup;

  @Input()
  formGroupName: string;

  @Output()
  deleteVariable: EventEmitter<DeleteVariableEventArg> = new EventEmitter<DeleteVariableEventArg>();


  constructor() { }

  ngOnInit() {
  }

  handleClickdeleteVariable() {
    this.deleteVariable.emit(new DeleteVariableEventArg(parseInt(this.formGroupName, 10)));
  }

}
