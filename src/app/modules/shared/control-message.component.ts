import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'control-message',
  styleUrls: ['./control-message.component.css'],
  templateUrl: './control-message.component.html'
})
export class ControlMessageComponent {
  @Input() control: FormControl;

  constructor() {
  }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
