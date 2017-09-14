import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from "../login.service";
import { formulaire } from "../register/formulaire";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logUser: formulaire;
  constructor(private logingService: LoginService) {

  }

  LogingUser(logform: NgForm) {

    this.logUser = {
      name: logform.value.name,
      email: logform.value.email,
      password: logform.value.password
    };

    console.log(this.logUser);


    this.logingService.sendform(this.logUser).subscribe(function (res) {
      console.log(res.status);
      logform.value.message = "user logged"


    }, function (err) {
      console.log(err);
      logform.value.message = " wrong or missing email/password"
    });

  }

  ngOnInit() {


  }

}

