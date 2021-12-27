import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { ShareDataService } from 'src/app/Services/ShareData';
 
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
  @Input() cardColor: string  = 'none';
  @Input() cardData:any;
  constructor(private router:Router,private share:ShareDataService) { }

  ngOnInit() {
  }
 
  navToMembers(data:any):void{
    this.share.selectedOffice = data;
    this.router.navigate(['/office/members']);
  }

  navToEditOffice():void{
    this.router.navigate(['/office/edit']);
  }

  toggleCard():void{
    this.expandCard = !this.expandCard;
  }

}
