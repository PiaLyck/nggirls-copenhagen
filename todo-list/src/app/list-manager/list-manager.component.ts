import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
  <div class="todo-app">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <todo-input (submit)="addItem($event)">Save</todo-input>
  <ul>
    <li *ngFor="let item of todoList">
      <todo-item [todoItem]="item"></todo-item>
    </li>
  </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'NgGirls todo app';
  todoList: Array<TodoItem>;

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  constructor(private todoListService: TodoListService) {

  }

  addItem(title: string): void {
    this.todoList.push({ title });
  }
}

interface TodoItem {
  title: string;
}
