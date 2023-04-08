import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthloginService {


  constructor(private http: HttpClient) { }

  logincode(data: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/login', data)
    // return this.http.get('http://localhost:3000/user/'+email)
  }
  getme(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/me')
  }

  inloggedIn():boolean {
    return sessionStorage.getItem('role') != null
  }




}
