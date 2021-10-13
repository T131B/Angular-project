import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class ApifunctionsService {
  private configUrl = "http://localhost:3000/teachers";

  constructor( private http : HttpClient) { }
  getTeacher() : Observable<Teacher>{
    return this.http.get<Teacher>(this.configUrl);
  }
  getById(id) : Observable<Teacher>{
    return this.http.get<Teacher>(this.configUrl+ `/${id}`);
  }
  post(object) : Observable<Teacher>{
    return this.http.post<Teacher>(this.configUrl, object);
  }
  put(object , id){
    return this.http.put(this.configUrl+ `/${id}`, object)
  }
  delete(id) : Observable<Teacher>{
    return this.http.delete<Teacher>(this.configUrl + `/${id}`);
  }
}
