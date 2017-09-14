import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UpdatingService } from "../updating.service";
import { formulaire } from "../register/formulaire";
import { UserService } from "../user.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateUser: formulaire;
  profiles = [];
  public userLoaded;

  constructor( private updatingService: UpdatingService, private userService: UserService, private route: ActivatedRoute, private router: Router, ) {

    var _id = this.route.snapshot.params['id'];
    
    console.log(_id)
      this.userService.getUser(_id).subscribe(res => {
        console.log(res);

        this.profiles = res;
        this.userLoaded = this.profiles[0]
        console.log(this.userLoaded);
        
      });

  }

  LogingUser() {

    

    console.log(this.userLoaded);


    this.updatingService.sendform(this.userLoaded).subscribe(function (res) {
      console.log(res.status);
      // updateform.value.message = "user updated"


    }, function (err) {
      console.log(err);
      // updateform.value.message = "wrong name/email or already in use or missing"
    });

  }

  

  ngOnInit() {
    var _id = this.route.snapshot.params['id'];
    this.userService.getUser(_id).subscribe(function (res) {
      console.log(res);

      this.profiles = res;
      this.userLoaded = this.profiles[0]
      console.log(this.userLoaded);
      
    }, function (err) {
      console.log(err);
    });
   }


}


