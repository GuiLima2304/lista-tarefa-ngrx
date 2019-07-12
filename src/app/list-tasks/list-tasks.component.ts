import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalState } from '../reducers/global.reducer';
import { ToggleLoading, ShowAlert } from '../actions/global.actions';
import { DeleteTask } from '../actions/task.actions';
import { of, from } from 'rxjs';
import { take, first } from 'rxjs/operators';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  @Input() taskList: string[];
  

  constructor(private router: Router, private store: Store<GlobalState>) { }

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch(new ToggleLoading(false));
    }, 2000);
    /*setTimeout(() => {
      this.store.dispatch(new ShowAlert('O fefo vem trabalhar segunda e terça'));
    }, 5000);*/
  }

  /*navigateTo(id) {
    this.router.navigate(['/info', id]);
  }*/

  Teste(){
    const rx = from(this.taskList).pipe(
      first()
    );

    rx.subscribe((x) => console.log(x));
  }
  

}
