import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GlobalState } from './reducers/global.reducer';
import { selectLoading, selectShowAlert, selectMessageAlert } from './selectors/global.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showLoading$ = this.store.pipe(select(selectLoading));
  public showAlert$ = this.store.pipe(select(selectShowAlert));
  public messageAlert$ = this.store.pipe(select(selectMessageAlert));

  constructor(private store: Store<GlobalState>) {}

  childEvent(msg) {
    alert(msg);
  }
}
