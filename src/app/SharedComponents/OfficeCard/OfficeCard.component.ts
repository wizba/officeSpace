import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
 
// such override allows to keep some initial values
 
export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}
@Component({
  selector: 'app-OfficeCard',
  templateUrl: './OfficeCard.component.html',
  styleUrls: ['./OfficeCard.component.scss']
})
export class OfficeCardComponent implements OnInit {

  expandCard:boolean = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  navToMembers():void{
    this.router.navigate(['/office/members']);
  }

  navToEditOffice():void{
    this.router.navigate(['/office/edit']);
  }

  toggleCard():void{
    this.expandCard = !this.expandCard;
  }

}
