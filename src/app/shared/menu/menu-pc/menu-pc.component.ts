import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-pc',
  templateUrl: './menu-pc.component.html',
  styleUrls: ['./menu-pc.component.scss']
})
export class MenuPcComponent implements OnInit {

  public is_side_bar_hide: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
