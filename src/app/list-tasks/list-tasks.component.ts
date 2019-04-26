import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  @Input() taskList: string[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(id){
    this.router.navigate(['/info', id]);
  }

}
