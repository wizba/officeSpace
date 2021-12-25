import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-NewOffice',
  templateUrl: './NewOffice.component.html',
  styleUrls: ['./NewOffice.component.scss']
})
export class NewOfficeComponent implements OnInit {

  form!: FormGroup;
  
  constructor(private router:Router,private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      officeName: ['',Validators.required],
      physicalAddress: ['',Validators.required],
      email: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      maxCapacity: ['',Validators.required],
    });
   }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
      
    })
  }

  goBack():void{
    this.router.navigate(['/home']);
  }
 
  get f() { return this.form.controls; }
  
  clearForm(){
    this.form.reset();
  }

  onSubmit(){
    console.log(this.form.value);
    this.clearForm();
  }

}
