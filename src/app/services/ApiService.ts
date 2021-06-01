import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import * as employeesData from './database/employees.json';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  private jsonFile = employeesData;

  API_URL: string = "https://raw.githubusercontent.com/boburanvarov/pizza/main/backend/reactPizza.json";

  get(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.API_URL, { observe: 'response' });
  }

  getEmployees() {
    let data: any = this.jsonFile;
    data = data.default;

    let item = localStorage.getItem('EmployeesList');
    if(item != null){
      data = JSON.parse(item);
    }

    return data;
  }

  saveEmployees(data: any) {
    localStorage.setItem('EmployeesList', JSON.stringify(data));
  }

}