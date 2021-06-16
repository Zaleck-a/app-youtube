import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/youtube.models';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent implements OnInit {

  items: Item[] = [];

  constructor( private data: DataService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.data.getVideos().subscribe( res => {
      
      this.items.push( ...res );
      console.log(this.items);
    })
  }

  viewVideo(item: Item){
    Swal.fire({
      html: ` <h4>${item.snippet.title}</h4>
              <hr>
              <iframe width="100%" 
                      height="315" 
                      src="https://www.youtube.com/embed/${item.id.videoId}" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            `
    })
  }

}
