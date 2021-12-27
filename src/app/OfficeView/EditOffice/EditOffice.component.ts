import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APIService } from 'src/app/Services/API.service';
import { ShareDataService } from 'src/app/Services/ShareData';
import { Color } from 'src/app/Shared/officeColors';

@Component({
  selector: 'app-EditOffice',
  templateUrl: './EditOffice.component.html',
  styleUrls: ['./EditOffice.component.scss']
})
export class EditOfficeComponent implements OnInit {

  form!: FormGroup;
  colors:any = Color;
  selected:any;
  selectedColor!:string;

  constructor(private router:Router,
    private formBuilder: FormBuilder,
    private share:ShareDataService,
    private apiService:APIService,
    private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      officeName: [this.share.selectedOffice.officeName,Validators.required],
      physicalAddress: [this.share.selectedOffice.physicalAddress,Validators.required],
      email: [this.share.selectedOffice.email,Validators.required],
      phoneNumber: [this.share.selectedOffice.phoneNumber,Validators.required],
      maxCapacity: [this.share.selectedOffice.maxCapacity,Validators.required],
    });
    this.selectedColor ='';
   }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
      
    })

    let colorsLength1 = this.colors.row1.length;
    let colorsLength2 = this.colors.row2.length;
    this.selected ={
      row1:Array(colorsLength1).fill(false),
      row2:Array(colorsLength2).fill(false)
    }
  }

  goBack():void{
    this.router.navigate(['/home']);
  }
 
  get f() { return this.form.controls; }
  
  clearForm(){
    this.form.reset();
  }

  onSubmit(){

    let officeValue = this.form.value;
    let isInValid = this.form.invalid;
    if(!isInValid){
      officeValue['color'] = this.selectedColor != ' '?this.selectedColor:officeValue['color'];
      console.log(officeValue);
  
      let officeId = this.share.selectedOffice._id
      //send to the database
      this.apiService
      .updateOffice(officeId,officeValue)
      .subscribe(data=>{
        this.toastr.success('Office added successfully')
        this.apiService.loading = false;
    },
      error=>this.toastr.error(JSON.stringify(error)));
      
      this.resetColors()
      this.clearForm();
    }else{
      this.toastr.error('please check all fields for correct data','Invalid input!!!')
    }
   
  }

  selectColor(index:number,color:string,row:number){

    //reset all colors
    this.resetColors();

    //set selected color
    if(row === 1){
      this.selected.row1[index] = true;
    }else if(row === 2){
      this.selected.row2[index] = true;
    }

    this.selectedColor = color;
    
  }

  resetForm(){
    this.form.reset();
  }

  resetColors(){
    let colorsLength1 = this.colors.row1.length;
    let colorsLength2 = this.colors.row2.length;
    this.selected ={
      row1:Array(colorsLength1).fill(false),
      row2:Array(colorsLength2).fill(false)
    }
  }

  deleteOffice(){
    let id = this.share.selectedOffice._id;
    this.apiService
    .deleteOffice(id)
    .subscribe(data =>{
      this.goBack()
      this.apiService.loading = false;
    },
    error =>console.log(error));   
  }

}
