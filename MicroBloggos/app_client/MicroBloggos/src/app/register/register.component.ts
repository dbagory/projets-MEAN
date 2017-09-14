import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RegisterService } from "../register.service";
import { formulaire } from "./formulaire";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: formulaire;
  constructor(private registerService: RegisterService) {

  }

  createUser(regform: NgForm) {

    this.newUser = {
      name: regform.value.name,
      email: regform.value.email,
      password: regform.value.password/* ,
      id: regform.value.id */
    };

    console.log(this.newUser);


    this.registerService.sendform(this.newUser).subscribe(function (res) {
      console.log(res.status);
      regform.value.message = "user registered"


    }, function (err) {
      console.log(err);
      regform.value.message = "wrong name/email or already in use or missing"
    });

  }

  ngOnInit() {


  }

}
