import { Component } from '@angular/core';
import { APIService } from './Services/API.service';
import { StoreService } from './Services/Store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'officeSpace';

 
  constructor(public api:APIService){}

}
