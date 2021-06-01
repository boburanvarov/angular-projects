import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



export interface Contact {
  id : string;
  name : string;
}
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  createForm = this.fb.group({
    name : ['', [ 
        Validators.required,
        Validators.minLength(4)
      ]
    ],
    number :['', [
        Validators.minLength(12),
        Validators.pattern
      ]
    ],
  })

  get login(){
    return this.createForm.get('name');
  }

  get phoneNumber(){
    return this.createForm.get('number');
  }

  onSubmit(){}

  contactList : Array<any> = [];

  ngOnInit(): void {

    let contacts = localStorage.getItem('contacts');

    if(contacts != null){
      this.contactList = JSON.parse(contacts);

    }
   
  }


  create(){
    if(this.createForm.valid) {
      let data = this.createForm.value;

      if(this.checkUnique(data.name)){
        let newData = {
          id: this.contactList.length +1,
          name: data.name,
          number : data.number
        }

        this.contactList.push(newData);
        localStorage.setItem('contacts', JSON.stringify(this.contactList));
        this.createForm.reset()
      }
      
      else {
        alert("Contactda bunday ma'lumot mavjud !")
      }
    }
  }

  checkUnique(name : string){
    return this.contactList.filter(c => String(c.name).toLowerCase() == name.toLowerCase()
    .trim()).length == 0; }

    delete(contact: any) {
      let index = this.contactList.findIndex(c => c.id == contact.id);
  
      if(index > -1) {
  
        this.contactList.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(this.contactList));
  
        // buni o'zgartirish kerak !
        document.location.reload();
      }
    }

    

}
