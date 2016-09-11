import {Component, ViewEncapsulation} from "@angular/core";
import {User, Address} from "../../classes/user";
import {RegistrationService} from "./registration.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'esn-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent {
  constructor(fb: FormBuilder, private registrationService: RegistrationService) {
    this.basicForm = fb.group({
      "userName": ["", Validators.required],
      "userSurname": ["", Validators.required],
      "userDateOfBirth": ["", Validators.required],
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

  basicForm: FormGroup;
  sectionForm: FormGroup;
  addressForm: FormGroup;

  tabIds = ['basic-info', 'section-info', 'address-info'];
  selectedId = this.tabIds[0];

  public toggleSelected() {
    this.selectedId = this.tabIds[(this.tabIds.indexOf(this.selectedId) + 1)];
  }

  private previousTab(event) {
    this.selectedId = this.tabIds[(this.tabIds.indexOf(this.selectedId) - 1)];
  }

  submitted = false;

  onSubmit() {
    //We can skip validation since we validate using html5
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

  sections = [
    'VU',
    'VDU'
  ];

  positions = [
    'ESN\'er',
    'Mentor',
    'Both'
  ]


}