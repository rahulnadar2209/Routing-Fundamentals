import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public lists=[];

  constructor(private _taskservice:TaskService) { }

  ngOnInit() {
    this._taskservice.gettasklist()
                    .subscribe(data => this.lists=data)
  }

}