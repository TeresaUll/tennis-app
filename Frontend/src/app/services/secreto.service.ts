
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SecretoService {

  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get<any>(this.URL + '/secreto');
  }

}
