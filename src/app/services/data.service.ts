import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.models';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  display: boolean = false;
  private youtubeUrl = 'https://youtube.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyDrBlt3sjdQxgNC_t2G7ZS_VqBf6zy7jOc';
  //AIzaSyAUWtvdPrUgrDo-tE9MjR3lHcfsUtV1pZw
  private search = 'thewekend';
  private nextPageToken = '';

  constructor( private http: HttpClient) {}

  getShow(value :boolean){
    this.display = value;
    
  }

  
  valueDisplay() {
    return this.display
  }
  


  getVideos(){

    const url = `${this.youtubeUrl}/search`
    const params = new HttpParams().set('part', 'snippet')
                                   .set('q', this.search)
                                   .set('maxResults', '9')
                                   .set('key', this.apiKey)
                                   .set('pageToken', this.nextPageToken)


    return this.http.get<YoutubeResponse>(url, { params })
               .pipe(
                 map( resp => {
                   this.nextPageToken = resp.nextPageToken;
                   return resp.items
                 })
               )

  }
}
