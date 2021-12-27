import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';
import { SharedModule } from '../Shared/Shared.module';
import { SpinnerDottedModule } from 'spinners-angular/spinner-dotted';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SpinnerDottedModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
