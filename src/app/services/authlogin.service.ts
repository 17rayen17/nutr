import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthloginService {

  isLoggedIn=false
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const data = {
      email: email,
      password: password
    };
    return this.http.post('http://127.0.0.1:8000/api/auth/login', data)
  }

  saveToken(access_token: any) {
    // localStorage.setItem('token', access_token)
    sessionStorage.setItem('token',`Bearer ${access_token}`)
    this.isLoggedIn=true
  }


  getData() {
    let api_key = "http://127.0.0.1:8000/api/auth/me";
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
    });
    const requestOptions = { headers: headers };

    return this.http.get('http://127.0.0.1:8000/api/auth/me',requestOptions)
  }






  create(email: string, password: string, FirstName: string, LastName: string,
    phone:any,birth_date:Date,role:string) {
    const data = {
        firstname: FirstName,
        lastname: LastName,
        email: email,
        phone: phone,
        birth_date: birth_date,
        role: role,
        password: password,
        password_confirmation : password

    };
    return this.http.post('http://127.0.0.1:8000/api/auth/register', data)
  }

}
