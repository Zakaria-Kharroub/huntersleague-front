import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {TokenService} from "../services/token.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage:string='';

  constructor(
    private fb:FormBuilder,
    private authservice:AuthService,
    private tokenService:TokenService,
    private router:Router
  ) {
    this.loginForm=this.fb.group({
      login:['',Validators.required],
      password:['',Validators.required]
    });
  }

  onSubmit():void{
    if (this.loginForm.valid){
      this.authservice.login(this.loginForm.value).subscribe({
        next:(response)=>{
          this.tokenService.setToken(response.token);
          this.router.navigate(['/']);
        },
        error:(error)=>{
          console.error('login failed: ',error);
          this.errorMessage='invalid credanteil.try again';
        }
      });
    }
  }
}
