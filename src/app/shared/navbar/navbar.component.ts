import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  show: boolean = false;

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    
  }

  shared(key:any){
    console.log(key);
  }

  isShow(){
    this.show = !this.show;
    this.dataService.getShow(this.show)
  }

}
