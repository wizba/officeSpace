import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { OfficeModalComponent } from './OfficeModal/OfficeModal.component';

@Component({
  selector: 'app-OfficeMembers',
  templateUrl: './OfficeMembers.component.html',
  styleUrls: ['./OfficeMembers.component.scss']
})
export class OfficeMembersComponent implements OnInit {

  openModal: boolean = false;
  @ViewChild(OfficeModalComponent)
  officeModal!: OfficeModalComponent;
  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;
  Search:FormControl = new FormControl('');  

  constructor(private router:Router) { }

  ngOnInit() {
    this.Search.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }
    
  showChildModal(actions:boolean): void {
    this.officeModal.showChildModal(actions);
  }

  showActions(){
    this.officeModal.showChildModal(true);
  }
  hideChildModal(): void {
    this.childModal?.hide();
  }


  public modalOpen():void {
    this.openModal =! this.openModal;
  }

  goBack():void{
    this.router.navigate(['/home']);
  }

}
