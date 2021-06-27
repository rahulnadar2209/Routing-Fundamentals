import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';





@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, TaskListComponent, routingComponents ],
  bootstrap:    [ AppComponent ],
  providers: [TaskService]
})
export class AppModule { }
