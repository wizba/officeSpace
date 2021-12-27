import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ShareDataService } from 'src/app/Services/ShareData';
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
  cardData:any;
  officeMembers:any;
  constructor(private router:Router,private share:ShareDataService) { }

  ngOnInit() {
    this.cardData = this.share.selectedOffice;
    
    if(!this.cardData){
      this.router.navigate(['']);
    }else{
      this.officeMembers = this.cardData.members.map((value:any) => value)
    }
    
    this.Search.valueChanges
    .subscribe((value:string)=>{
      console.log(value);
      
        if(value.trim() !==" "){
          this.cardData.members=this.cardData
          .members
          .filter((item:any) =>{

            if(item.FirstName+''.includes(value))
              return true
            else
              return false;
            
          })
        }else{

        }
    })

  }
    
  showChildModal(actions:boolean,memberIndex?:number,member?:any): void {
    this.officeModal.showChildModal(actions);
  }

  showActions(memberIndex:number,member:any){
    this.officeModal.showChildModal(true,memberIndex,member);
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
