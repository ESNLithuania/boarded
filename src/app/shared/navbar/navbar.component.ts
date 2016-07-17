import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';

@Component({
    selector: 'b-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    directives: [ROUTER_DIRECTIVES, MD_TABS_DIRECTIVES]
})
export class NavbarComponent {}
