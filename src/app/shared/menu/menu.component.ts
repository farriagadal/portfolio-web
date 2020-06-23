import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public is_side_bar_hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
