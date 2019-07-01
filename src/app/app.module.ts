import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './info/info.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormComponent } from './form/form.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/task.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    NavbarComponent,
    routingComponents,
    ListTasksComponent,
    TaskItemComponent,
    InfoComponent,
    ErrorPageComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ task: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
