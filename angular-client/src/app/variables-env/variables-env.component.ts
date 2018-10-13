import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DeleteVariableEventArg } from '../variable-env/variable-env.component';

@Component({
  selector: 'app-variables-env',
  templateUrl: './variables-env.component.html',
  styleUrls: ['./variables-env.component.css']
})
export class VariablesEnvComponent implements OnInit, OnChanges {

  @Input()
  fGroup: FormGroup;

  fArray: FormArray = new FormArray([]);
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  generateVariableForm(): FormGroup {
    return this.fb.group({
      'variable': [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fGroup.currentValue) {
      this.fArray = changes.fGroup.currentValue.get('variables');
    }
  }

  /**
   *
   * add contact form item in UI at the end
   * @event click
   * @tracability BE_SCR-F007-EX0007-110_V1.02_C1.01
   */
  handleClickAddVariable() {
      this.fArray.push(this.generateVariableForm());
  }

  handleClickDeleteVariable($event: DeleteVariableEventArg) {
    this.fArray.removeAt($event.indexVariable);

  }

}
