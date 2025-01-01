import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TokenService} from "./token.service";
import {Router} from "@angular/router";

export interface AuthResponse{
  token:string;
}
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  cin: string;
  nationality: string;
}

export interface LoginRequest{
  login:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8443/api/v1/auth';
  constructor(
    private http: HttpClient,
    private tokenService:TokenService,
    private router:Router
  ) { }

  register(registerRequest: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/register`, registerRequest);
  }
  login(loginRequest:LoginRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.API_URL}/login`,loginRequest);
  }

  logout():void{
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }

  isAuthenticated():boolean{
    return !!this.tokenService.getAccessToken();
  }
}
