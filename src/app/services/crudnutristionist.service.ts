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

  getallnutr(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/allNutritionist')
  }


  create(data:any):Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', data)
    // return this.http.post('http://localhost:3000/nutr', data)
  }

  deletenut(id: number):Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/auth/delete/${id}`)
  }

  updatenut(id: number, data: any): Observable<any>{
    return this.http.put(`http://127.0.0.1:8000/api/auth/update/${id}`,data)
  }





  //--------------crud patient-------------

  getpatient(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/allPatient')
    // return this.http.get('http://localhost:3000/patien')
  }

  getpatientbyid(id:any): Observable<any> {
    // return this.http.get('http://localhost:3000/patien/'+id)
    return this.http.get('http://127.0.0.1:8000/api/auth/showPatient/'+id)
  }

  createpatient(data:any):Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', data)
    // return this.http.post('http://localhost:3000/patien', data)
  }

  deletepatient(id: number):Observable<any> {
    // return this.http.delete(`http://localhost:3000/patien/${id}`)
    return this.http.delete(`http://127.0.0.1:8000/api/auth/delete/${id}`)
  }

  updatepatient(id: number, data: any): Observable<any>{
    // return this.http.put(`http://localhost:3000/patien/${id}`,data)
    return this.http.put(`http://127.0.0.1:8000/api/auth/update/${id}`,data)
  }



  //--------------crud assistant ------------------

  getassist(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/allAssistant')
  }

  createassist(data:any):Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', data)
  }

  deleteAssist(id: number):Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/auth/delete/${id}`)
  }

  updateAassistt(id: number, data: any): Observable<any>{
    return this.http.put(`http://127.0.0.1:8000/api/auth/update/${id}`,data)
  }

  //-----------------crud aliment -----------------------------

  getAliment(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/aliment/index')
  }

  getAlimentById(id: number): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/api/aliment/show/${id}`)
  }


  createAliment(data:any):Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/aliment/store', data)
  }

  deleteAliment(id: number):Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/aliment/destroy/${id}`)
  }

  updateAliment(id: number, data: any): Observable<any>{
    return this.http.post(`http://127.0.0.1:8000/api/aliment/update/${id}`,data)
  }

  //----------------------crud note ---------------------------
  getnote():Observable<any> {
    return this.http.get('http://localhost:3000/note')
  }

  createnote(data : any):Observable<any> {
    return this.http.post('http://localhost:3000/note',data)
  }

  deletenote(id: number): Observable<any>{
    return this.http.delete(`http://localhost:3000/note/${id}`)
  }
}



