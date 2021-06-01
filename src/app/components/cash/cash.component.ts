import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'cash',
    templateUrl: './cash.component.html',
    styleUrls: ['./cash.component.css']
})


export class CashComponent implements OnInit {

    constructor(private fb: FormBuilder) { }

    section: string = "";
    sectionTable: string = "";
    sumPay = 0;
    sumCosts = 0;

    pay: any[] = [];
    costs: any[] = [];
    payTable: any[] = [];
    costsTable: any[] = [];


    cashElementForm = this.newCashElementForm();
    costsElementForm = this.newCashElementForm();

    cashForm = this.fb.group({
        cashElements: this.fb.array([this.cashElementForm]),
        costsElements: this.fb.array([this.costsElementForm])
    })

    get cashElements() {
        return this.cashForm.get('cashElements') as FormArray;
    }

    get costsElements() {
        return this.cashForm.get('costsElements') as FormArray;
    }

    ngOnInit() {
        let payData: any = localStorage.getItem("pay");
        let costsData: any = localStorage.getItem("costs");
        
        if(payData != null){
            this.pay = JSON.parse(payData);
        }

        if(costsData != null){
            this.costs = JSON.parse(costsData);
        }


        this.getSumMoney();


    }

    openSection(section: string) {
        this.section = section;
    }

    openSectionTable(sectionTable: string) {
        this.sectionTable = sectionTable;
    }

    add() {
        this.cashElements.push(this.newCashElementForm());
        this.costsElements.push(this.newCashElementForm());
    }

    remove(index: number) {
        this.cashElements.removeAt(index);
        this.costsElements.removeAt(index);
    }

    save(type: string) {
        let data = type == 'pay' ? this.cashForm.get('cashElements')?.value :
            this.cashForm.get('costsElements')?.value;

        this.cashForm = this.fb.group({
            cashElements: this.fb.array([this.newCashElementForm()]),
            costsElements: this.fb.array([this.newCashElementForm()])
        })

        for (let item of data) {
            if(type == 'pay'){
                this.pay.push(item);
            }else{
                this.costs.push(item);
            }
        }

        let local = type == 'pay' ? this.pay : this.costs;

        localStorage.setItem(type, JSON.stringify(local));
    }

    newCashElementForm() {
        return this.fb.group({
            date: ['', Validators.required],
            payment_type: ['naqd', Validators.required],
            cause: ['', Validators.required],
            money: ['', Validators.required],
            currency: ['sum', Validators.required]
        });
    }


    getSumMoney(){

        if(this.pay.length > 0){
            this.sumPay = this.pay.map(m => m.money).reduce((total, num) => total + num);
        }

        if(this.costs.length > 0){
            this.sumCosts = this.costs.map(m => m.money).reduce((total, num) => total + num);
        }
    }
}