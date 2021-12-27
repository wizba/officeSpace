import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { APIService } from 'src/app/Services/API.service';
import { Avatars } from 'src/app/Shared/officeAvatars';
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
  allowEdit:boolean = false;
  buttonText:string = "NEXT";
  avatars:any = Avatars;
  selectedAvatar!:string;
  selected:any;
  @Input() cardData:any;
  form!: FormGroup;

  memberNumber:number =-1;
  memberToDelete:any;

  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;

  constructor(private formBuilder: FormBuilder,private api:APIService) { 
    this.form = this.formBuilder.group({
      FirstName: ['',Validators.required],
      LastName: ['',Validators.required]
    });
    this.selectedAvatar = ''
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.resetAvars();
   
  }

  showChildModal(showActions:boolean,memberIndex?:number,member?:any): void {
    this.showActions = showActions;

    if(memberIndex){
      this.memberNumber =memberIndex;
    }

    if(member){
      this.memberToDelete =member;
    }
    
    this.childModal?.show();
  }
 
  resetAvars(){
    let avatarsLength1 = this.avatars.row1.length;
    let avatarsLength2 = this.avatars.row2.length;
    this.selected ={
      row1:Array(avatarsLength1).fill(false),
      row2:Array(avatarsLength2).fill(false)
    }
  }
  selectAvatar(index:number,avatar:string,row:number){

    //reset all colors
    this.resetAvars();

    //set selected color
    if(row === 1){
      this.selected.row1[index] = true;
    }else if(row === 2){
      this.selected.row2[index] = true;
    }

    this.selectedAvatar = avatar;
    
  }

  AddStaffMember(){

    let member = this.form.value;
    member['avatar'] = this.selectedAvatar;

    if(!this.allowEdit){
      this.cardData.members.push(member);
    }else{
      this.updateMember(member)
    }
    
    let officeId = this.cardData._id;
    //update the database 
    this.api.updateOffice(officeId,this.cardData)
    .subscribe(data =>{
      console.log(data)
    },error =>console.log(error))
    this.form.reset();
  }


  updateAPI(){
    
  }
 
  updateMember(member:any){
    console.log(this.memberNumber);
    this.cardData.members[this.memberNumber] = member;
    console.log(member);
    
  }

  resetSearchList(){
    return this.cardData;
  }
  deleteStaffMember(){
    
    
    let officeId = this.cardData._id; 
    this.cardData.members.splice(this.memberNumber,1);
    this.api.updateOffice(officeId,this.cardData)
    .subscribe(data =>{
    
       this.cardData = data;

    },error =>console.log(error))

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
    else
    if(this.buttonText === "ADD STAFF MEMBER")
    {
      this.AddStaffMember()
      this.showNextPage = false;
      this.buttonText = "NEXT";
      this.hideChildModal();
    }

  }
  onEditStaffMember(){

    this.allowEdit = true;
    this.form.get('FirstName')?.setValue(this.memberToDelete.FirstName);
    this.form.get('LastName')?.setValue(this.memberToDelete.LastName);
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
