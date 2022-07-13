import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-other-first',
  templateUrl: './other-first.component.html',
  styleUrls: ['./other-first.component.css']
})
export class OtherFirstComponent implements OnInit {

  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
