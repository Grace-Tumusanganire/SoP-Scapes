// src/app/core/services/placeTap.service.ts

import { Injectable } from '@angular/core';
import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { ActivatedRoute } from '@angular/router'
import { PlaceService } from '../../core/services/place.service'
import { Router } from '@angular/router'
import { awarns } from '@awarns/core'
import { recordsStore } from '@awarns/persistence'
import { Change } from '@awarns/core/entities'
import {alert} from '@nativescript/core'
import { AoIProximityChange, AoIProximityChangeType, GeofencingProximity, checkAreaOfInterestProximityTask } from '@awarns/geofencing';
import { Observable } from 'rxjs';
// import { AppComponent } from '~/app/app.component';

@Injectable({
    providedIn: 'root',
  })


  
export class PlaceTapService {


  constructor(
    private router: Router,
    private placeService : PlaceService,

    ) {

      // recordsStore.listLast('aoi-proximity-change', ).subscribe((record) => {
      //  if (record.change === Change.START){
      //   // this.availSurvey()
      //  }
      // });

  }

    availSurvey(){

       //Access places
      const places = this.placeService.getPlaces();
      
       // Access database: const aoi = recordsStore.listLast('aoi-change')


      // const aoi = recordsStore.listLast('aoi-proximity-change')

      const aoi = "uji"

        const areasAoi = this.placeService.getAllAOIs();
       // const change = Change.START
       // const proximity = GeofencingProximity.INSIDE
       // const aoiId = new AoIProximityChange (aoi, change, proximity  )
      


       // For each place
       // Check if aoi is in place.aois
       // Yes: enable survey for place.id => return place.id

        // for (const place of places) {
          if (areasAoi.includes(aoi)) {
            return "cool"; // Return the matching place ID
          } else{
            return null; // Return null if no match is found
          } 
        }

        
    // }

    showMessage(){

        alert({
          title: "Check notification tray for in-situ survey",
          message: "Survey are generated via notifications once you are physically in this area",
          okButtonText: "OK"
      }).then(() => {
          console.log("Alert dialog closed.");
      });

    }

    
  }
