import {NgModule} from "@angular/core";
import {NavigationComponent} from "./navigation.component";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./footer.component";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [CommonModule, FormsModule],
  exports: [NavigationComponent, FooterComponent]
})

export default class SharedModule {
}