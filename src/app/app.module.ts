import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomeModule } from './Home/Home.module';
import { OfficeCardComponent } from './SharedComponents/OfficeCard/OfficeCard.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    HomeModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
