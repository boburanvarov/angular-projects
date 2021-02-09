import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/ApiService';

declare function plusLessFunction(event: Event, action: string, index: number): void;

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: ApiService
  ){}

  pizzaData: Array<any> = [];

  ngOnInit(){
    console.log("Home page");
    this.getPizzaData();
  }

  getPizzaData(){
    
    console.log("getPizzaData(): is run");

    this.service.get().subscribe(resp => {      
      this.pizzaData = resp.body.pizzaData;
      console.log(this.pizzaData);
    });
  }

  plusLess(event: Event, action: string, index: number){

    plusLessFunction(event, action, index);
    
  }
}
