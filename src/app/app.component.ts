import { Component } from '@angular/core';
import { slideInAnimation } from './shared/menu/animation/transition';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
  ]
})
export class AppComponent {

  public data_animation: number;

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(data => {
     // this.data_animation = data.data.animation;
     console.log("data.id")
      console.log(data)
     });
    // router.events.subscribe( event => {
    //   if (event instanceof NavigationEnd) {
    //     $('.ui .modal').remove();
    //   }
    // });
    // this.messagingService.receiveMessage(); //esto es necesario para mensajes fcm
  }
  
  prepareRoute(outlet: RouterOutlet) {
    // this.data_animation: number;
    console.log(outlet.activatedRouteData);
    console.log(this.data_animation);
    // if (condition) {
      
    // } else {

    // }
    this.data_animation = outlet.activatedRouteData['animation'];
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}