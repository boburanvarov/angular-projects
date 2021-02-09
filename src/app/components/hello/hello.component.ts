import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/ApiService';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: ApiService
  ){}

  pizzaData = []

  ngOnInit(){
    console.log("hello");

    this.getPizzaData();
  
  }

  getPizzaData(){
    this.service.get().subscribe(resp => {

      this.pizzaData = resp.body.pizzaData;

      console.log(this.pizzaData);
    });
  }

employeesForm = this.fb.group({
  id:       [''],
  name:     [''],
  age:      [''],
  salary:   [''],
  position: ['']
})

  employeeInformation: any;
  viewProfile = false;
  title = 'qale bobur';
  editAction = false;
  
  employees = [
    {
      id: 1,
      name:"Javod",
      age: 25,
      salary: 3000,
      position: "manager",
      eyescolor: "Brown"
    },
    {
      id: 2,
      name:"Humoyun",
      age: 18,
      salary: 300,
      position: "developer",
      eyescolor: "Black"
    },
    {
      id: 3,
      name:"Xurwid",
      age: 21,
      salary: 300,
      position: "developer",
      eyescolor: "Brown"
    },
    {
      id: 4,
      name:"bobur",
      age: 20,
      salary: 300,
      position: "developer",
      eyescolor: "Green"
    },
  ];


  save(action: boolean){

    let newEmployee = {
      id: this.employeesForm.value.id,
      name: this.employeesForm.value.name,
      age: this.employeesForm.value.age,
      salary: this.employeesForm.value.salary,
      position: this.employeesForm.value.position,
      eyescolor: this.employeesForm.value.eyescolor,
    }

    if(!action){
      // yangi qo'shadi
      let id = this.employees[this.employees.length-1].id + 1;
      newEmployee.id = id;
      this.employees.push(newEmployee);      
    }

    else{
      // o'zgartirib saqlash
      let index = this.employees.findIndex(e => e.id == newEmployee.id);      
      this.employees[index] = newEmployee;
    }
  }

  delete(data:any){
    console.log(data);
  
    let index = this.employees.indexOf(data);
    if(index > -1){
      this.employees.splice(index, 1);
    }
  }

  edit(data:any){
    this.employeesForm.get('id')?.setValue(data.id);
    this.employeesForm.get('name')?.setValue(data.name);
    this.employeesForm.get('age')?.setValue(data.age);
    this.employeesForm.get('salary')?.setValue(data.salary);
    this.employeesForm.get('position')?.setValue(data.position);

    this.editAction = true;    
  }

  profile(data:any){
    this.viewProfile = true;
    this.employeeInformation = data;
    console.log(this.employeeInformation);
  }

}
