import { Component, ViewEncapsulation } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', './styles/validation.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
  title = 'app works!';
}
