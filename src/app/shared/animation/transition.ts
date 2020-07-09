import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =

  trigger('routeAnimations', [

    //IZQ -> DER
    transition(':increment', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          transform: 'translateX(0%)',
          width: '100%',
          opacity: 0.1,
        })
      ]),
      query(':enter', [
        style({ transform: 'translateX(100%)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({  transform: 'translateX(-100%)', opacity: 0 }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ transform: 'translateX(0%)' , opacity: 1}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    
    //DER -> IZQ
    transition(':decrement', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            transform: 'translateX(0%)',
            width: '100%',
            opacity: 0.1,
          })
        ]),
        query(':enter', [
          style({ transform: 'translateX(-100%)'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
          ])
        ]),
        query(':enter', animateChild()),
    ]),

  ]);