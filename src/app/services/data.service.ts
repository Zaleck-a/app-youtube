import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.models';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private youtubeUrl = 'https://youtube.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyDrBlt3sjdQxgNC_t2G7ZS_VqBf6zy7jOc';
  private search = 'thewekend';
  private nextPageToken = '';

  constructor( private http: HttpClient) {}


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
