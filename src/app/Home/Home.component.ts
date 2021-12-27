import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../Services/API.service';
import { ShareDataService } from '../Services/ShareData';
import { StoreService } from '../Services/Store.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  offices:any[] =[];
  
  constructor(private router:Router,public api:APIService,private store:StoreService){
    
    this.api.getOffices()
    .subscribe(data =>{
       console.log(data);
      this.offices = data.reverse();
      this.api.loading = false;
      
    })
  }
  ngOnInit() {
  }

  navToNewOffice():void{
    this.router.navigate(['/office/new']);
  }
}
