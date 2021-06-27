import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from './task';

@Injectable()
export class TaskService {
  private _url="assets/data/tasklist.json";
  constructor(private http:HttpClient) { 
    
  }
  gettasklist():Observable<ITask[]>{
    return this.http.get<ITask[]>(this._url);
  }

}