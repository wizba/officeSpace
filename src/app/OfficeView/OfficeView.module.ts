import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeViewComponent } from './OfficeView.component';
import { OfficeCardComponent } from '../SharedComponents/OfficeCard/OfficeCard.component';
import { SharedModule } from '../Shared/Shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OfficeMembersComponent } from './OfficeMembers/OfficeMembers.component';
import { NewOfficeComponent } from './NewOffice/NewOffice.component';
import { EditOfficeComponent } from './EditOffice/EditOffice.component';
import { OfficeRoutingModule } from './OfficeRoute/Office.router';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { OfficeModalComponent } from './OfficeMembers/OfficeModal/OfficeModal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule .forRoot(),
    OfficeRoutingModule,
    AccordionModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    OfficeViewComponent,
    OfficeMembersComponent,
    NewOfficeComponent,
    EditOfficeComponent,
    OfficeModalComponent],
  exports: [OfficeViewComponent]
})
export class OfficeViewModule { }
