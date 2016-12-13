import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import SharedModule from '../shared/shared.module';
import {
  NgbTabsetConfig,
  NgbDatepickerConfig
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    NgbTabsetModule.forRoot(),
    NgbDatepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    RegistrationComponent
  ],
  providers: [
  ]
})

export class RegistrationModule {
}
