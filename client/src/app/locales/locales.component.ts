import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalesService } from '../shared';
import { Local } from 'protractor/built/driverProviders';

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

  locales: Array<string> = [];

  ngOnInit() {

    this.localesService.getAll()
    .subscribe(locales => {
      this.locales = locales
    });
  }
}
