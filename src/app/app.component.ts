import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//private myservice:MyserviceService
export class AppComponent {
  constructor(){
    this.myservice=new MyserviceService();
  }

  title = 'ls';
  myservice;
  SiKan;

  ngOnInit(){
    this.SiKan=this.myservice.showSiKan();
  }
}
