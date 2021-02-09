import { Component, OnInit } from "@angular/core";

@Component ({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit  {
    ngOnInit(){
      
    }
      showMenu = true;
      constructor(){}
  
      hide(){
        this.showMenu = false;
      }
 }  