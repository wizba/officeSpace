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
import { APIService } from './Services/API.service';
import { StoreService } from './Services/Store.service';
import { HttpClientModule } from '@angular/common/http';
import { ShareDataService } from './Services/ShareData';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerDottedModule } from 'spinners-angular/spinner-dotted';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    HomeModule,
    ButtonsModule.forRoot(),
    OfficeViewModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    SpinnerDottedModule 
  ],
  providers: [APIService, StoreService, ShareDataService],
  bootstrap: [AppComponent],
  exports: [ModalModule, FormsModule],
})
export class AppModule {}
