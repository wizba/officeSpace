import { Component, OnInit,ViewChild  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal'
@Component({
  selector: 'app-OfficeView',
  templateUrl: './OfficeView.component.html',
  styleUrls: ['./OfficeView.component.scss']
})
export class OfficeViewComponent implements OnInit {

  openModal: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;
 
  showChildModal(): void {
    this.childModal?.show();
  }
 
  hideChildModal(): void {
    this.childModal?.hide();
  }


  public modalOpen():void {
    this.openModal =! this.openModal;
  }

}
