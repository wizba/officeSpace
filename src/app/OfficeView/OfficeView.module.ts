import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeViewComponent } from './OfficeView.component';
import { OfficeCardComponent } from '../SharedComponents/OfficeCard/OfficeCard.component';
import { SharedModule } from '../Shared/Shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [OfficeViewComponent],
  exports: [OfficeViewComponent]
})
export class OfficeViewModule { }
