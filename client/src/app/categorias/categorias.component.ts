import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriasService } from '../shared';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  constructor(
    private router: Router,
    private categoriasService: CategoriasService
  ) {}

  /* isAuthenticated: boolean; */
  /* listConfig: ArticleListConfig = new ArticleListConfig(); */
  categorias: Array<string> = [];
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

    this.categoriasService.getAll()
    .subscribe(categorias => {
      this.categorias = categorias;
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
