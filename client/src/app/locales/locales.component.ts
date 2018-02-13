import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {

  constructor(
    private router: Router,
   /*  private localesService: LocalesService */
  ) {}

  ngOnInit() {

/*     this.localesService.getAll()
    .subscribe(locales => {
      this.locales = locales
    }); */
  }
}
