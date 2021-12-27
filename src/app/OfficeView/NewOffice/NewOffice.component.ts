import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APIService } from 'src/app/Services/API.service';
import { Color } from 'src/app/Shared/officeColors';
@Component({
  selector: 'app-NewOffice',
  templateUrl: './NewOffice.component.html',
  styleUrls: ['./NewOffice.component.scss']
})
export class NewOfficeComponent implements OnInit {

  form!: FormGroup;
  colors:any = Color;
  selected:any;
  selectedColor!:string;

  constructor(private router:Router,
    private formBuilder: FormBuilder,
    private apiService:APIService,
    private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      officeName: ['',Validators.required],
      physicalAddress: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phoneNumber: ['',Validators.required],
      maxCapacity: ['',Validators.required],
    });

    this.selectedColor ='';
   }

  ngOnInit() {
  
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
      officeValue['color'] = this.selectedColor;
      console.log(officeValue);
  
      //send to the database
      this.apiService
      .createOffice(officeValue)
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
  
}
