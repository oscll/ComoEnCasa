// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
// import { Http, Response } from '@angular/http';

// import 'rxjs/add/operator/toPromise';


// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

// // import { ApiService } from './api.service';

// // @Injectable()
// // export class LocalesService {
// //   constructor (
// //     private apiService: ApiService
// //   ) {}

// //   getAll(): Observable<[string]> {
// //     return this.apiService.get('/tags')
// //            .map(data => data.tags);
// //   }

// // }

// @Injectable()
// export class LocalesService {
//   private apiURL = 'http://localhost:8082/categorias/?format=json';
//     //private apiURL = 'http://192.168.27.133:82/api/locales';
//   //private apiURL = 'http://angular2-1-yomogan.c9users.io:8082/dinosaurs/?format=json';

//   constructor(private http: Http) { }

//   // getCategorias() {
//   //       return this.http.get(this.apiURL)
//   //              .map(response => response.json());
//   //     }
    

//     // getCategorias(){
//     //     return this.http.get(this.apiURL)
//     //               .toPromise()
//     //               .then(response => response.json())
//     //               .catch(this.handleError);
//     //   }


//   getCategorias() {
//     return this.http.get(this.apiURL)
//               .toPromise()
//               .then(response => response.json())
//               .catch(this.handleError);  
//   }

//   private handleError(error: any) {
//     console.error('An error occurred', error);
//     return Promise.reject(error.message || error);
//   }
// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Locales } from '../models';
import { ApiService } from './api.service';

@Injectable()
export class LocalesService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<[string]> {
    return this.apiService.get('/loclist/')
           .map(data => data.results);
  }

  getOne(id:string): Observable<[string]>{
    return this.apiService.get('/locdetail/'+id+'/')
            .map(data => data);

  }  

  getbyCategory(categoria:string): Observable<[string]> {
    return this.apiService.get('/loccat/'+categoria+'/')
           .map(data => data.results);
  }
}