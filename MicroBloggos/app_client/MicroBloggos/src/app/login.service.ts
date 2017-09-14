import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { formulaire } from "./register/formulaire";


@Injectable()
export class LoginService {

  constructor(
    private _http: Http
  ) { }

  sendform(logUser){
    return this._http.post('http://localhost:3000/login', logUser)
    .map((res:Response) => res.json());
  }

}