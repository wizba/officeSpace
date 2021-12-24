import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-EditOffice',
  templateUrl: './EditOffice.component.html',
  styleUrls: ['./EditOffice.component.scss']
})
export class EditOfficeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack():void{
    this.router.navigate(['/home']);
  }


}
