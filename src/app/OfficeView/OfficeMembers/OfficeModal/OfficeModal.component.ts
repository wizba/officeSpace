import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-OfficeModal',
  templateUrl: './OfficeModal.component.html',
  styleUrls: ['./OfficeModal.component.scss']
})
export class OfficeModalComponent implements OnInit {

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
