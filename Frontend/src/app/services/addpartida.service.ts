import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddpartidaService {

  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient, private router: Router) { }

  addPartido(partido: any) {
    return this.http.post<any>(this.URL + '/createpartido', partido);
  }
}
