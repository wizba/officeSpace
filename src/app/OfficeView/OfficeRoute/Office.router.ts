import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOfficeComponent } from '../EditOffice/EditOffice.component';
import { NewOfficeComponent } from '../NewOffice/NewOffice.component';
import { OfficeMembersComponent } from '../OfficeMembers/OfficeMembers.component';
import { OfficeViewComponent } from '../OfficeView.component';

const routes: Routes = [
  {
    path: '', component: OfficeViewComponent, children: [
        { path: '', redirectTo: 'members', pathMatch: 'full' },
        { path: 'members', component: OfficeMembersComponent },
        { path: 'new', component: NewOfficeComponent },
        { path: 'edit', component: EditOfficeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }