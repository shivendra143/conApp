import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn : 'root'
})

export class CountryService {

  constructor(private _service: HttpClient) { }


  getCountries (val: string): Observable<any> {

    const url = environment.APIURL + 'region/' + val;
    const data = [
      {
            'id': 1,
            'firstName': 'ted',
            'lastName': 'james',
            'gender': 'male',
            'address': '1234 Anywhere St.',
            'city': ' Phoenix ',
            'state': {
                'abbreviation': 'AZ',
                'name': 'Arizona'
            },
            'orders': [
                {'productName': 'Basketball', 'itemCost': 7.99},
                {'productName': 'Shoes', 'itemCost': 199.99}
            ],
            'latitude': 33.299,
            'longitude': -111.963
      }];
     return  this._service.get(url);

   }
  getCountriesById(id: any): Observable<any>  {
    const url = environment.APIURL + 'alpha?codes=' + id;
    return  this._service.get(url);
   }
}
