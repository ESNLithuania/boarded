import {NgModule} from "@angular/core";
import {NavigationComponent} from "./navigation.component";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./footer.component";
@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavigationComponent, FooterComponent]
})

export default class SharedModule {}