import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeList(){
    return [
      { id: 1, name: 'João', age: 23 },
      { id: 2, name: 'Pedro', age: 17 },
      { id: 3, name: 'Rafael', age: 29 },
      { id: 4, name: 'Mariana', age: 21 }
    ];
  }
}
