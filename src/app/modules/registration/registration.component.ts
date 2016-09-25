import {Component, ViewEncapsulation} from '@angular/core';
import {User, Address} from '../../classes/user';
import {RegistrationService} from './registration.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';
import {NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'esn-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [NgbDatepickerConfig],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent {

  private basicForm: FormGroup;
  private sectionForm: FormGroup;
  private addressForm: FormGroup;

  private tabs: Array<any>;
  private selectedForm;

  private submitted = false;

  private formErrorMsg = 'Some of form fields are not valid';
  private formErrorVisible = false;

  sections = [
    'VU',
    'VDU'
  ];

  positions = [
    'ESN\'er',
    'Mentor',
    'Both'
  ];

  constructor(fb: FormBuilder, private registrationService: RegistrationService, config: NgbDatepickerConfig) {
    this.buildForms(fb);
    this.buildTabs();
    config.maxDate = {
      year: 2002,
      month: 1,
      day: 30
    };
    config.minDate = {
      year: 1950,
      month: 0,
      day: 1
    };
    config.startDate = {
      year: 1993,
      month: 7
    };
  }

  public toggleSelected() {
      this.selectedForm = this.tabs[this.tabs.indexOf(this.selectedForm) + 1];
  }

  private buildForms(fb: FormBuilder) {
    this.basicForm = fb.group({
      "userName": ["", Validators.required],
      "userSurname": ["", Validators.required],
      "userDateOfBirth": ["", [Validators.required, dateIsPickedAndValid()]],
      "userPhoneNumber": ["", Validators.required],
      "userEmail": ["", Validators.required]
    });
    this.sectionForm = fb.group({
      "userSection": ["", Validators.required],
      "userPosition": ["", Validators.required],
    });
    this.addressForm = fb.group({
      "userAddressStreetName": ["", Validators.required],
      "userAddressBuildingNumber": ["", Validators.required],
      "userAddressCity": ["", Validators.required],
    });
  }

  private buildTabs() {
    this.tabs = [
      {
        name: 'basic-info',
        form: this.basicForm
      },
      {
        name: 'section-info',
        form: this.sectionForm
      },
      {
        name: 'address-info',
        form: this.sectionForm
      }
    ];

    this.selectedForm = this.tabs[0];
  }

  private previousTab(event) {
    this.selectedForm = this.tabs[this.tabs.indexOf(this.selectedForm) - 1];
  }

  private onSubmit() {
    //We can skip validation since we validate using html5
    //No we cannot because of safari -__-"
    let basic = this.basicForm.value;
    let section = this.sectionForm.value;
    let address = this.addressForm.value;
    let user: User = new User(basic.userName, basic.userSurname, section.userSection, section.userPosition, basic.userPhoneNumber, basic.userEmail, basic.userDateOfBirth, new Address(address.userAddressStreetName, address.userAddressBuildingNumber, address.userAddressCity));

    //show that form some section is invalid
    this.registrationService.addUser(user)
      .subscribe((res: User) => {
        this.submitted = true;
      });
  }

  private areFormsValid() {
    return this.basicForm.valid && this.sectionForm.valid && this.addressForm.valid
  }

}

export function dateIsPickedAndValid(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const date = control.value;
    if (date == null) {
    }
    if (date.day != null) {
      return null;
    }
    return {'dateOfBirth': {date}};
  };
}
