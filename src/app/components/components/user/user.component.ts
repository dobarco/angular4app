import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  adress:{
    street:string,
    city:string,
    state:string
  };
  hobbies:string[];
  hello:any;

  constructor() {
   console.log('Constructor ran...');
   }

  ngOnInit() {
    console.log('ngOnInit ran...')
    this.name="Dobarquinho";
    this.age=30;
    this.email="rafael.dobarco@gmail.com";
    this.adress={
      street:'Rua castro maia',
      city:'Sao Paulo',
      state:'SP'
    }
  }
}
