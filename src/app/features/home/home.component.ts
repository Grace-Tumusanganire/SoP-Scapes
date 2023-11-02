// src/app/features/home/home.component.ts

import { Component } from '@angular/core'
import { PlaceService } from '~/app/core/services/place.service'
import { ItemEventData } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'
import { SurveyService } from '../survey/survey.service'
import { Router } from '@angular/router'


@Component({
  moduleId: module.id,
  selector: 'ns-home',
  templateUrl: 'home.component.html',
})

export class HomeComponent {
    places = this.placeService.getPlaces()
  
    constructor(
      private placeService: PlaceService,

      private routerExtensions: RouterExtensions,

      private router: Router,
    ) {}


    onPlaceTap(placeId: number) {
      this.router.navigate(['/survey', placeId]);
    }
    


  }