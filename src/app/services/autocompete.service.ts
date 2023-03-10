import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompeteService {

  constructor(private http: HttpClient) { }

  opts = [];
  getData() {
    return this.opts.length ?
      of(this.opts) :
      this.http.get('https://jsonplaceholder.typicode.com/users').pipe(tap((data:any) => this.opts = data))
}
}
