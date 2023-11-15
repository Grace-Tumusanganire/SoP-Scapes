// src/app/features/home/home.component.ts

import { Component } from '@angular/core'
import { PlaceService } from '~/app/core/services/place.service'
import { ItemEventData } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'
import { SurveyService } from '../survey/survey.service'
import { Router } from '@angular/router'
import {PlaceTapService} from '../../core/services/placeTap.service'
import { exportData } from '../record/exportRecords';

@Component({
  moduleId: module.id,
  selector: 'ns-home',
  templateUrl: 'home.component.html',
})

export class HomeComponent {
    places = this.placeService.getPlaces()
  
    constructor(
      private placeService: PlaceService,

      private placeTapService: PlaceTapService,

      private routerExtensions: RouterExtensions,

      private router: Router,

    ) {}


    onPlaceTap(placeId: number) {

      // const plcId = this.placeTapService.availSurvey()

      this.placeTapService.showMessage();

      // if (placeId){

      //   this.router.navigate(['/survey', placeId]);
      // }

      // else {  
        
      //    this.placeTapService.showMessage();

      // }

      //const idSurvey = this.placeTapService.availSurvey();

      // if placeTap is idSurvey => show survey (navigate) else show modal (alert)

    }

    sendResponses() {
        exportData('Responses');
      }
    


  
  }