import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <div class="todo-item">
  {{ todoItem.title }}
  <button class="btn-red btn">Remove</button>
  </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  constructor() {
  }

  ngOnInit() {
  }

}
