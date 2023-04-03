import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddclientService {

  constructor(private http: HttpClient) { }

  createclient(data: any): Observable<any>{
    return this.http.post('http://localhost:3000/client',data)
  }
  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/client')
  }
}
