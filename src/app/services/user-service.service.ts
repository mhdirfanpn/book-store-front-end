import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http : HttpClient ) { }

  api = "https://boook-api.onrender.com/api"

  userLogin(email:string,password:string){
    const data = {
      email,
      password
    }
    return this.http.post<any>(`${this.api}/login`,data)
  }


}
