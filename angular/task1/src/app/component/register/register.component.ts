import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  constructor() { }
  email: string;
  name: string;
  password: string;

  is_blocked= Boolean(Math.round(Math.random()));
  users = [
    {name: 'Oleh', password: 456,email:'Oleh4@gmail.com', is_blocked: true},
    {name: 'Andriy', password: 4578,email:'Andriy4@gmail.com', is_blocked: false},
    {name: 'Nazar', password: 896,email:'Nazar4@gmail.com', is_blocked: true},
    {name: 'Iwan',  password: 'asdadsd',email:'Iwan4@gmail.com', is_blocked: true},
  ];
  newUsers = {
    id: undefined, name: '',password: '', email: '',  is_blocked: Boolean(Math.floor(Math.random() * 100))
  };

  registrationUser() {
    this.is_blocked= Boolean(Math.round(Math.random()));
    this.newUsers.id = this.users.length + 1;
    this.email = this.newUsers.email;
    this.name = this.newUsers.name;
    this.password = this.newUsers.password;
    this.newUsers.email = '';
    this.newUsers.name = '';
    this.newUsers.password = '';
    this.users.push({ name: this.name,password: this.password, email: this.email, is_blocked: this.is_blocked});
    console.log(this.users);
  }

  @Input() Register;

}
