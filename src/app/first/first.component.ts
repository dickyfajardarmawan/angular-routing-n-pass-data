import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  currentItem = 'Television';

  items = ['item1', 'item2', 'item3', 'item4'];

  constructor() { }

  ngOnInit(): void {
    console.log(history.state.data);
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
