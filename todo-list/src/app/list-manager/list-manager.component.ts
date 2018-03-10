import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-manager',
  template: `
  <h1>
    Welcome to {{ title }}!
  </h1>
  <todo-input (submit)="addItem($event)"></todo-input>
  <ul>
    <li *ngFor="let item of todoList">
      <todo-item [todoItem]="item"></todo-item>
    </li>
  </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'NgGirls todo app';
  public todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  ngOnInit(): void {
  }

  addItem(title: string): void {
    this.todoList.push({ title });
  }
}
