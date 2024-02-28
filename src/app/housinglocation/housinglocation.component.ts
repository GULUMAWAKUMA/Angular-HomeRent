import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-housinglocation',
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {
  // @Input() housingLocation!: Housinglocation;

  // housingLocationList: Housinglocation[] = [];
  @Input() filteredLocationList!: Housinglocation[];

  // constructor(private housingService: HousingService) { }
  // ngOnInit(): void {
  //   this.housingLocationList = this.housingService.getAllHousingLocations();
  //   this.filteredLocationList = this.housingLocationList;
  // }

  // filterResults(text: string) {
  //   if (!text) {
  //     this.filteredLocationList = this.housingLocationList;
  //   }
  //   this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
  //     housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
  //   );
  // }
}

