/* import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import { ApiService } from './api.service';

// @Injectable()
// export class LocalesService {
//   constructor (
//     private apiService: ApiService
//   ) {}

//   getAll(): Observable<[string]> {
//     return this.apiService.get('/tags')
//            .map(data => data.tags);
//   }

// }

@Injectable()
export class CategoriasService {
  private apiURL = 'http://localhost:8080/api/catlist/?format=json';
  //private apiURL = 'http://angular2-1-yomogan.c9users.io:8082/dinosaurs/?format=json';

  constructor(private http: Http) { }

  // getCategorias() {
  //       return this.http.get(this.apiURL)
  //              .map(response => response.json());
  //     }
    

    // getCategorias(){
    //     return this.http.get(this.apiURL)
    //               .toPromise()
    //               .then(response => response.json())
    //               .catch(this.handleError);
    //   }


  getCategorias() {
    return this.http.get(this.apiURL)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';

@Injectable()
export class CategoriasService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<[string]> {
    return this.apiService.get('/catlist/')
           .map(data => data.results);
  }

}