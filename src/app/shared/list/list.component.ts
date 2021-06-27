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
  show: boolean = false;
  playerVars = {
    cc_lang_pref: 'en',
    playlist: ''
  };
  private player :any;
  private ytEvent: any;

  constructor(private data: DataService) {
   }
  
  ngOnInit(): void {}

  onDrop(event: CdkDragDrop<any>) {
    this.data.drop(event);
  }

  getPlaylist(videos: Item[]){
    let videoId: string[] = [];

    videos.map( video => {
       return video.id
    }).map( id => {
      videoId.push(id.videoId);
    });
    return videoId.join();
  }

  onStateChange(event :any) {
    this.ytEvent = event.data;
  }

  savePlayer(player: any) {
    this.player = player;
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  play() {
    if(this.getPlaylist(this.playlist) === ''){
      return;
    }
    this.playerVars.playlist = this.getPlaylist(this.playlist);
    this.show = true;
  }

  stopVideo() {
    this.show = false;
    this.player.stopVideo();
  }


}
