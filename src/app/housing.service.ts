import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/locations';

  protected housingLocationList: Housinglocation[] = [];

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }


  registeration(firstname: string, lastname: string, email: string): void {
    console.log(firstname + ' ' + lastname + ' ' + email);
  }
}