import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalesService } from '../shared';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']

})
/* export class LocalesComponent implements OnInit {

  constructor(
    private localesService: LocalesService,
    private router: Router) {}

  categorias: Array<string> = [];
  error: any;

  getCategorias() {
    this.localesService
        .getCategorias()
        .then(locales => this.locales = locales)
        .catch(error => this.error = error);

        console.log("hola");
        console.log(this.locales);
  }


  ngOnInit() {
    this.getCategorias();
  }

} */

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {
  constructor(
    private router: Router,
    private localesService: LocalesService
  ) {}

  /* isAuthenticated: boolean; */
  /* listConfig: ArticleListConfig = new ArticleListConfig(); */
  locales: Array<string> = [];
 /*  tagsLoaded = false; */ 

  ngOnInit() {
    // this.userService.isAuthenticated.subscribe(
    //   (authenticated) => {
    //     this.isAuthenticated = authenticated;

    //     // set the article list accordingly
    //     /* if (authenticated) {
    //       this.setListTo('feed');
    //     } else {
    //       this.setListTo('all');
    //     } */
    //   }
    // );

    this.localesService.getAll()
    .subscribe(locales => {
      this.locales = locales;
      // this.tagsLoaded = true;
    });
  }

 /*  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
  } */
}
