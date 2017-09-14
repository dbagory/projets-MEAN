import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    private _http: Http
  ) { }

getUsers() {
  return this._http.get('http://localhost:3000/users')
  .map((res:Response) => res.json());
}  
getUser(userId) {
  return this._http.get('http://localhost:3000/users/' + userId)
  .map((res:Response) => res.json());
} 
}
