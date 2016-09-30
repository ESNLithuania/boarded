import {NgModule} from "@angular/core";
import {NavigationComponent} from "./navigation.component";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./footer.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ControlMessageComponent } from './control-message.component';
@NgModule({
  declarations: [NavigationComponent, FooterComponent, ControlMessageComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [NavigationComponent, FooterComponent, ControlMessageComponent]
})

export default class SharedModule {
}
