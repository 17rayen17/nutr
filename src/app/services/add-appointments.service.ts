import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAppointmentsService {

  constructor(private http: HttpClient) { }

  getrdv():Observable<any> {
    return this.http.get('http://localhost:3000/appointement')
  }

  addrdv(data: any): Observable<any>{
    return this.http.post('http://localhost:3000/appointement',data)
  }
  deleterdv(id: number): Observable<any>{
    return this.http.delete('http://localhost:3000/appointement/'+id)
  }
  updateRdv(id: number, data: any): Observable<any>{
    return this.http.put(`http://localhost:3000/appointement/${id}`,data)
  }

}

