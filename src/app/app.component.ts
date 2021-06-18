import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-youtube';

  constructor( private dataService: DataService){
    
  }

  getDisplay(){
    if(this.dataService.valueDisplay()){
      return 'none';
    }else{
      return 'block';
    }
  }

}
