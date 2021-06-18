import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  items = Array(500).fill(0)

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

}
