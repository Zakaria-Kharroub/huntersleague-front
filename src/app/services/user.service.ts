import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  cin: string;
  role: string;
  nationality: string;
  registrationDate: string;
}

export interface PageResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:8443/api/v1/users';

  constructor(private http: HttpClient) { }

  getAllUsers(page: number = 0, size: number = 5): Observable<PageResponse<User>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PageResponse<User>>(`${this.API_URL}/all`, { params });
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${userId}`);
  }
}
