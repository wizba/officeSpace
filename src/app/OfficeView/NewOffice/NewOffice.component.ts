import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-NewOffice',
  templateUrl: './NewOffice.component.html',
  styleUrls: ['./NewOffice.component.scss']
})
export class NewOfficeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goBack():void{
    this.router.navigate(['/home']);
  }

}
