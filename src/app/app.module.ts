import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from '@nativescript/angular'; // Import the FormsModule

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { BrowserModule } from '@angular/platform-browser';
import { SurveyModule } from './features/survey/survey.module'
import { PlaceTapService } from './core/services/placeTap.service'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptFormsModule ],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
  providers: [PlaceTapService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
