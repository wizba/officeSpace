import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-OfficeModal',
  templateUrl: './OfficeModal.component.html',
  styleUrls: ['./OfficeModal.component.scss']
})
export class OfficeModalComponent implements OnInit {

  openModal: boolean = false;
  showNextPage:boolean = false;
  showActions:boolean = false;
  delete:boolean = false;
  buttonText:string = "NEXT";

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      FirstName: ['',Validators.required],
      LastName: ['',Validators.required]
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }
  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;
 
  showChildModal(showActions:boolean): void {
    this.showActions = showActions;
    this.childModal?.show();
  }
 
  hideChildModal(): void {
    this.childModal?.hide();
  }


  public modalOpen():void {
    this.openModal =! this.openModal;
  }

  buttonChange():void{
    
    this.showActions = false;
    if(this.buttonText === "NEXT"){
      this.showNextPage = true;
      this.buttonText = "ADD STAFF MEMBER";
    }
    else{
      this.showNextPage = false;
      this.buttonText = "NEXT";
      this.hideChildModal();
    }

  }
  onEditStaffMember(){
    this.showNextPage = false;
    this.showActions = false;
    this.delete = false;
    this.buttonText = "NEXT";
  }


  goBack():void{
    this.showNextPage = false;
    this.buttonText = "NEXT";
  }

  onDeleteMember(){
    this.delete = true;
    this.showNextPage = false;
    this.buttonText = "NEXT";
  }

  handler(){
    this.showNextPage = false;
    this.showActions = false;
    this.delete = false;
    this.buttonText = "NEXT";
    console.log('...Test...')
  }
}
