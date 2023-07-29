import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor( private http : HttpClient) { }

  api = "https://boook-api.onrender.com/api"

  booksData() : Observable<any> {
    return this.http.get(`${this.api}/books`) 
  }

  bookDetails(id : string | null) : Observable<any> {
    return this.http.get(`${this.api}/book/${id}`)
  }


}
