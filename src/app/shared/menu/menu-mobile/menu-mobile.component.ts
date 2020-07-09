import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {


  public is_side_bar_show: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  public setRoute(url: string): void {
    this.router.navigate([`${url}`]);
    window.scrollTo(0,0);
    this.is_side_bar_show = false;
  }

}
