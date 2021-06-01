
import { Component, OnInit} from '@angular/core';


@Component ({
    selector: 'form-page',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {


    title = "my first form - group angular";
    contactMethod = [
        {type : 1, name : "E-mail"},
        {type : 2, name : "Sms"}
    ];
    contactMethod2 = [
        {type : 1, name : "E-mail"},
        {type : 2, name : "Sms"}
    ]

    constructor(){}

    ngOnInit(){}

    onNameChange(){
    }

    onSubmit(){}

}