// src/app/features/home/home.component.ts

import { Component } from '@angular/core'
import { PlaceService } from '~/app/core/services/place.service'

import { ItemEventData } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  moduleId: module.id,
  selector: 'ns-home',
  templateUrl: 'home.component.html',
})

export class HomeComponent {
    places = this.placeService.getPlaces()
  
    constructor(
      private placeService: PlaceService,

      private routerExtensions: RouterExtensions

    ) {}

    onPlaceTap(args: ItemEventData): void {
        this.routerExtensions.navigate(['survey', this.places[args.index].id])
      }


  }