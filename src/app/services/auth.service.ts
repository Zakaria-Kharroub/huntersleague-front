import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8443/api/v1/auth';
  // ^ Changed to v1 to match backend
  constructor(private http: HttpClient) { }

  register(registerRequest: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/register`, registerRequest);
  }
}
