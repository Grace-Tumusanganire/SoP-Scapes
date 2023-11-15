import { Component, OnInit } from '@angular/core';
import { awarns } from '@awarns/core';
import { AreaOfInterest, areasOfInterest } from '@awarns/geofencing';
import { Router } from '@angular/router';
import { TapActionType, notificationsManager } from '@awarns/notifications';
import { NgZone } from '@angular/core';

// const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {

  constructor(private router: Router, private zone: NgZone) {}

 

  async ngOnInit(){

    // firebase.init({
    //   // Optionally pass in properties for database, authentication and cloud messaging,
    //   // see their respective docs.
    // }).then(
    //   () => {
    //     console.log("firebase.init done");
    //   },
    //   error => {
    //     console.log(`firebase.init error: ${error}`);
    //   }
    // );
  
  
    const aois = await areasOfInterest.getAll();

    const newAoIs: Array<AreaOfInterest> = [
      // Update the area of interest with the information of the area of your choice

      //UJI
      {
        id: 'uji',
        name: 'UJI Campus',
        latitude: 39.994022,
        longitude: -0.067909,
        radius: 400,
      },
      // City center
      {
        id: 'citycenter',
        name: 'City Center',
        latitude: 39.986299,
        longitude: -0.038167,
        radius: 850,
      },
      // El grao Beaches -- 4
      {
        id: 'elgraob',
        name: 'El Grao Beach',
        latitude: 39.980817,
        longitude: 0.027583,
        radius: 400,
      },
      {
        id: 'elgraopl',
        name: 'El Grao Palmeral',
        latitude: 39.988042,
        longitude: 0.029754,
        radius: 400,
      },
      {
        id: 'elgraopn',
        name: 'El Grao Pinar',
        latitude: 39.995349,
        longitude: 0.031298,
        radius: 400,
      },
      {
        id: 'elgraog',
        name: 'El Grao Gurugu',
        latitude: 40.002471,
        longitude: 0.034055,
        radius: 400,
      },
      // Parks -- 9
      {
        id: 'merida',
        name: 'Parc de Mèrida',
        latitude: 39.981809,
        longitude: -0.065452,
        radius: 90,
      },
      {
        id: 'botanica',
        name: 'Parc de la Botànica Carmen Albert',
        latitude: 39.99066,
        longitude: -0.059401,
        radius: 50,
      },
      {
        id: 'eugenio',
        name: 'Eugenio de Avilés Park',
        latitude: 39.984199,
        longitude: -0.031914,
        radius: 25,
      },
      {
        id: 'pontferro',
        name: 'Parc Ribalta',
        latitude: 39.994014,
        longitude: -0.044098,
        radius: 105,
      },
      {
        id: 'bonarea',
        name: 'Parc BonÀrea Caragols',
        latitude: 39.980177,
        longitude: -0.034985,
        radius: 15,
      },
      {
        id: 'josegeol',
        name: 'Park geologist José Royo Gomez',
        latitude: 39.97824,
        longitude: -0.037987,
        radius: 70,
      },
      {
        id: 'ribalta',
        name: 'Parc Ribalta',
        latitude: 39.987699,
        longitude: -0.045275,
        radius: 140,
      },
      {
        id: 'rafalafena',
        name: 'Parc Rafalafena',
        latitude: 39.9923,
        longitude: -0.027006,
        radius: 100,
      },
      {
        id: 'guitarista',
        name: 'Parc Guitarrista Manuel',
        latitude: 39.992941,
        longitude: -0.02406,
        radius: 140,
      },
    ];
    
    // Naive check, to see if areas of interest have already been setup
    if (aois.length === newAoIs.length) {
      console.log('Areas already set up!');
      return;
    }
    // Ensure we start from something clean
    await areasOfInterest.deleteAll();
    
    // Insert the new area(s)
    await areasOfInterest.insert(newAoIs);
    console.log('Done setting up areas of interest!');
  
    /* 2. Then, setup tasks. This way, the geofencing task will already have the areas of interest */
    
    // This checks if all the registered tasks meet their pre-execution conditions:
    // - Permissions are granted
    // - System services are enabled
    let isReady = await awarns.isReady();
    if (!isReady) {
      const tasksNotReady = await awarns.tasksNotReady$;
      // This allows to query which task(s), from the ones in use, are not ready
      // You can use this information to, for example, conditionally show different UI elements here, showing a rationale to your users about why certain permission or functionality must be activated
      console.log(`The following tasks are not ready!: ${tasksNotReady}`);
      // This will automatically perform all the actions needed to prepare the tasks that are not yet ready
      await awarns.prepare();
      // Will throw an error if not all the tasks have been succesfully prepared
    }
    

    
    /* 3. Finally, once everything else is ready, start the background execution workflow */
    awarns.emitEvent('startEvent');

    
    isReady = await awarns.isReady();
    if (!isReady) {
      const tasksNotReady = await awarns.tasksNotReady$;
      // This allows to query which task(s), from the ones in use, are not ready
      // You can use this information to, for example, conditionally show different UI elements here, showing a rationale to your users about why certain permission or functionality must be activated
      console.log(`The following tasks are not ready!: ${tasksNotReady}`);
      // This will automatically perform all the actions needed to prepare the tasks that are not yet ready
      await awarns.prepare();
      // Will throw an error if not all the tasks have been succesfully prepared
    }
    	

  notificationsManager.onNotificationTap((notification) => {
    if (notification.tapAction.type === TapActionType.DELIVER_QUESTIONS) {
      const questionnaireId = notification.tapAction.id;
      if (questionnaireId === "FrequentSurvey") {
        this.zone.run(() => {
          this.router.navigate(['/survey']).catch((error) => {
            console.error('Navigation error:', error);
         })
        });
    } else if (questionnaireId === "InitialSurvey") {
      this.zone.run(() => {
        this.router.navigate(['/surveyI']).catch((error) => {
          console.error('Navigation error:', error);
       })
      });
    }
    } else {
     console.log("No survey available")    
    }
  });

 }
  
}

