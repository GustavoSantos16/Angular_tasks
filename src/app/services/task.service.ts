import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from '../Task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL,{})
  }

  deleteTasks(task:Task):Observable<Task>{
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
