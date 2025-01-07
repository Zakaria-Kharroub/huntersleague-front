import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Competition {
  code: string;
  location: string;
  date: string;
  speciesType: string;
  minParticipants: number;
  maxParticipants: number;
  openRegistration: boolean;
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
export class CompetitionService {
  private readonly API_URL = 'http://localhost:8443/api/v1/competitions';

  constructor(private http: HttpClient) { }

  getAllCompetitions(page: number = 0, size: number = 5): Observable<PageResponse<Competition>> {
    return this.http.get<PageResponse<Competition>>(`${this.API_URL}/all`, {
      params: {
        page: page.toString(),
        size: size.toString()
      }
    });
  }

  createCompetition(competition: Competition): Observable<Competition> {
    return this.http.post<Competition>(`${this.API_URL}/create`, competition);
  }
}
