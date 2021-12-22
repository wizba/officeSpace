import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './Shared.component';
import { OfficeCardComponent } from '../SharedComponents/OfficeCard/OfficeCard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent,OfficeCardComponent],
  exports: [SharedComponent,OfficeCardComponent]
})
export class SharedModule { }
