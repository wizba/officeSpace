import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';
import { OfficeCardComponent } from '../SharedComponents/OfficeCard/OfficeCard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent,OfficeCardComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
