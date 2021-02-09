import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  API_URL: string = "https://raw.githubusercontent.com/boburanvarov/pizza/main/backend/reactPizza.json";

  get(): Observable<HttpResponse<any>> {    
    return this.http.get<any>(
      this.API_URL, { observe: 'response' });
  }

}