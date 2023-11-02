// src/app/features/survey/survey.module.ts

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { SurveyRoutingModule } from './survey-routing.module'
import { SurveyComponent } from './survey.component'
import { UserResponsesService } from './user-responses.service'
@NgModule({
  imports: [NativeScriptCommonModule, SurveyRoutingModule],
  declarations: [SurveyComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [UserResponsesService],
})
export class SurveyModule {}