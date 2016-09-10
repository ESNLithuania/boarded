import {NgModule} from "@angular/core";
import {NavigationComponent} from "./navigation.component";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./footer.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [NavigationComponent, FooterComponent]
})

export default class SharedModule {
}