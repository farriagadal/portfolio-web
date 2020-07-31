import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-pc',
  templateUrl: './menu-pc.component.html',
  styleUrls: ['./menu-pc.component.scss']
})
export class MenuPcComponent implements OnInit {

  public is_side_bar_hide: boolean = true;
  
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  public setRoute(url: string): void {
    this.router.navigate([`${url}`]);
    window.scrollTo(0,0);
  }

}
