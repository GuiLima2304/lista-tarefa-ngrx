import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITaskListResponse } from '../models/taskListResponse';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskList(){
    return this.http.get<ITaskListResponse>('https://api.myjson.com/bins/ju1uc');
  }
}
