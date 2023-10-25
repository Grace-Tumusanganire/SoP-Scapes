// src/app/features/details/survey-routing.module.ts

import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { SurveyComponent } from './survey.component'

export const routes: Routes = [
  {
    path: '',
    component: SurveyComponent,
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
})
export class SurveyRoutingModule {}