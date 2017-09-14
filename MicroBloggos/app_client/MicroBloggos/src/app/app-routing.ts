import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";
import { UpdateUserComponent } from "./update-user/update-user.component";

import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ParamMap } from '@angular/router';

const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UserComponent },
    { path: 'users/:id', component: UpdateUserComponent },
    { path: '', component: AppComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}