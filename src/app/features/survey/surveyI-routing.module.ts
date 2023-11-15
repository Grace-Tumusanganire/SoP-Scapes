// src/app/features/details/survey-routing.module.ts

import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { SurveyIComponent } from './surveyI.component'

export const routes: Routes = [
  {
    path: '',
    component: SurveyIComponent,
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
})
export class SurveyIRoutingModule {}