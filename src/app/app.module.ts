import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomeModule } from './Home/Home.module';
import { OfficeCardComponent } from './SharedComponents/OfficeCard/OfficeCard.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { OfficeViewModule } from './OfficeView/OfficeView.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ButtonsModule.forRoot(),
    OfficeViewModule,
    ModalModule .forRoot(),
    ReactiveFormsModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ModalModule,FormsModule]
})
export class AppModule { }
