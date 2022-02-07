import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  public getCV(): void {
    window.open('/assets/CV-Fernando-Arriagada.pdf', '_blank');
  }
}
