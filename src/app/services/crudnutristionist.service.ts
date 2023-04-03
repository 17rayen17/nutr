import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudnutristionistService {

  constructor(private http: HttpClient) { }


//---------------crud nutr-----------------------

  getnutr(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/me')
  }

  create(data:any):Observable<any> {
    // return this.http.post('http://127.0.0.1:8000/api/auth/register', data)
    return this.http.post('http://localhost:3000/nutr', data)
  }

  deletenut(id: number):Observable<any> {
    return this.http.delete(`http://localhost:3000/nutr/${id}`)
  }

  updatenut(id: number, data: any): Observable<any>{
    return this.http.put(`http://localhost:3000/nutr/${id}`,data)
  }





  //--------------crud patient-------------

  getpatient(): Observable<any> {
    return this.http.get('http://localhost:3000/patien')
  }

  getpatientbyid(id:any): Observable<any> {
    return this.http.get('http://localhost:3000/patien/'+id)
  }

  createpatient(data:any):Observable<any> {
    return this.http.post('http://localhost:3000/patien', data)
  }

  deletepatient(id: number):Observable<any> {
    return this.http.delete(`http://localhost:3000/patien/${id}`)
  }

  updatepatient(id: number, data: any): Observable<any>{
    return this.http.put(`http://localhost:3000/patien/${id}`,data)
  }



  //--------------crud assistant ------------------

  getassist(): Observable<any> {
    return this.http.get('http://localhost:3000/assistant')
  }

  createassist(data:any):Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', data)
  }

  deleteAssist(id: number):Observable<any> {
    return this.http.delete(`http://localhost:3000/assistant/${id}`)
  }

  updateAassistt(id: number, data: any): Observable<any>{
    return this.http.put(`http://localhost:3000/assistant/${id}`,data)
  }

  //-----------------crud aliment -----------------------------

  getAliment(): Observable<any> {
    return this.http.get('http://localhost:3000/aliment')
  }

  createAliment(data:any):Observable<any> {
    return this.http.post('http://localhost:3000/aliment', data)
  }

  deleteAliment(id: number):Observable<any> {
    return this.http.delete(`http://localhost:3000/aliment/${id}`)
  }

  updateAliment(id: number, data: any): Observable<any>{
    return this.http.put(`http://localhost:3000/aliment/${id}`,data)
  }
}
