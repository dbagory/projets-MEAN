import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { formulaire } from "./register/formulaire";


@Injectable()
export class RegisterService {

  constructor(
    private _http: Http
  ) { }

  sendform(newUser){
    return this._http.post('http://localhost:3000/register', newUser)
    .map((res:Response) => res.json());
  }

}
