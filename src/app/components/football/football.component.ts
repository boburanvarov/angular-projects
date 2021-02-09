import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {

  constructor(){}

  numbers = [1,2,3,4,5,6,7,8,9];

  ngOnInit(){
    console.log("Football component is run");  
  }
}
