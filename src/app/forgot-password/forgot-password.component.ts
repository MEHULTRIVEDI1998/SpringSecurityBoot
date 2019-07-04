import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SpringSecurityCrudService } from '../spring-security-crud.service';
import { User } from '../User';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  user:User=new User('','','','','');
  forgotPasswordForm: FormGroup;
  submitted: boolean=false;

  constructor(private route:Router,private formBuilder:FormBuilder,private springSecurity:SpringSecurityCrudService) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.forgotPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    else{
      this.springSecurity.getForgotPassword(this.forgotPasswordForm.get("email").value).subscribe((res)=>{
        if(res == null){
          alert("Sorry This EmailId Does not exits..!!!!");
        }
        else{
          this.user=res as User;
        }
      });
    }
  }
  onBack(){
    this.route.navigate(['/']);
  }
}
