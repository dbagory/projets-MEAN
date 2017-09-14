import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { formulaire } from "./register/formulaire";

@Injectable()
export class UpdatingService {
  
    constructor(
      private _http: Http
    ) { }
  
    sendform(updateUser){
      return this._http.put('http://localhost:3000/users/'+ updateUser._id, updateUser)
      .map((res:Response) => res.json());
    }
  
  }