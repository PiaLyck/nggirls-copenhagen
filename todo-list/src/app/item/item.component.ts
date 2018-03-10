import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p>
      item works!
    </p>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
