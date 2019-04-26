import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTaskList(){
    return ['Tarefa 1','Tarefa 2','Tarefa 3'];
  }
}
