// src/app/features/survey/surveyI.module.ts

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { SurveyIRoutingModule } from './surveyI-routing.module'
import { TNSCheckBoxModule } from "@nstudio/nativescript-checkbox/angular";

import { SurveyIComponent } from './surveyI.component'
@NgModule({
  imports: [NativeScriptCommonModule, SurveyIRoutingModule,TNSCheckBoxModule],
  declarations: [SurveyIComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
})
export class SurveyIModule {}