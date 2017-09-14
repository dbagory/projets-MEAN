import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
@Component({
  selector: 'app-user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profiles =[];
  constructor(private userService: UserService) { }
  

  loadUsers() {
    let self = this;

    this.userService.getUsers().subscribe(function (res) {

      self.profiles = res;

      console.log(self.profiles);
    }, function (err) {
      console.log(err);
    });
  }
  DisplayUser(__id) {
    let self = this;

    this.userService.getUser(__id).subscribe(function (res) {

      self.profiles = res;

      console.log(self.profiles);
    }, function (err) {
      console.log(err);
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

}
