import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UpdatingService } from "./updating.service";
import { RegisterService } from "./register.service";
import { LoginService } from "./login.service";
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

import { AppRoutingModule } from "./app-routing";
import { formulaire } from "./register/formulaire";
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [UserService, RegisterService, LoginService, UpdatingService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
