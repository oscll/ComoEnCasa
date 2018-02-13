import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalesService } from '../shared';

@Component({
  selector: 'local-details',
  templateUrl: './localdetails.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localesService: LocalesService
  ) {}

  private id: string;
  private sub: any;

  local: Array<string> = [];

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
    });

    this.localesService.getOne(this.id)
    .subscribe(local => {
      this.local = local;
    });
  }

}
