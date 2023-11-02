import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../core/services/place.service';
import { Router } from '@angular/router'; // Import the Router
import { SurveyService } from './survey.service';

@Component({
  // Component configuration
})
export class PlaceComponent {
  // Other component properties and methods

  constructor(private router: Router, private surveyService: SurveyService) {}

 
}
