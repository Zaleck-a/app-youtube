import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/youtube.models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  playlist: Item[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  onDrop(event: CdkDragDrop<any>) {
    this.data.drop(event);
  }

}
