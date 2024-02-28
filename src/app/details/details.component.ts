import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  FormSubmit() {
    this.service.registeration(
      this.formlist.value.firstname ?? '',
      this.formlist.value.lastname ?? '',
      this.formlist.value.email ?? '',
    );
  }

  formlist = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })
  // firstname!: string;
  // lastname!: string;
  // email!: string;
  // form = [this.firstname, this.lastname, this.email];

  housingListid!: Housinglocation | undefined;

  constructor(private service: HousingService, private activatedRoute: ActivatedRoute) {
    const housingLocationId = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.service.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingListid = housingLocation;
    });
    // }
    // getHousingLocationById(id: number): Housinglocation | undefined {
    //   return this.service.getHousingLocationById(id);
    // }

  }

}