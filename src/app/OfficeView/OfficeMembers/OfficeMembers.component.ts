import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ShareDataService } from 'src/app/Services/ShareData';
import { OfficeModalComponent } from './OfficeModal/OfficeModal.component';
import {
  debounceTime,
  map
} from "rxjs/operators";
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
  searchText:string= '';
  cardData:any;
  officeMembers:any[] =[];
  officeId:string ='';
  constructor(private router:Router,private share:ShareDataService) { }

  ngOnInit() {
    this.cardData = this.share.selectedOffice;
    
    if(!this.cardData){
      this.router.navigate(['']);
    }else{
      this.officeId =this.cardData._id;
      this.officeMembers = this.cardData.members.map((value:any) => value)
    }
    
    this.Search.valueChanges
    .pipe(debounceTime(500))
    .subscribe((value:string)=>{
      this.cardData.members = this.officeMembers.filter((data:any)=>{
        
        let fName =data.FirstName.trim().toLocaleLowerCase();
        let lName = data.LastName.trim().toLocaleLowerCase();
        if(fName.includes(this.Search.value.toLocaleLowerCase().trim()) || lName.trim().toLocaleLowerCase().includes(this.Search.value.toLocaleLowerCase().trim()) )
        {
          return true 
        }else{

          //reset data
            
          return false
        }
      })
      
    })

  }
    
  showChildModal(actions:boolean,memberIndex?:number,member?:any): void {
    this.officeModal.showChildModal(actions);
  }

  showActions(memberIndex:number,member:any){

    this.share.selectedMember = memberIndex;

    console.log(this.share.selectedMember);
    
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
