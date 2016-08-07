import {Component} from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'b-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  directives: [MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES]
})
export class RegisterComponent {
}
