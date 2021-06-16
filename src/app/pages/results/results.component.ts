import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent implements OnInit {

  videos: Video[] = [];

  constructor( private data: DataService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(){
    this.data.getVideos().subscribe( res => {
      this.videos.push( ...res );
      console.log(res);
    })
  }

}
