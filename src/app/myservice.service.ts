import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor() { }
  
  showSiKan(){
    var objDate=new Date();
    return objDate;
  }
}

//We might come across a situation where we need some code to be used everywhere on the page. It can be for data connection that needs to be shared across components, etc. Services help us achieve that.
//With services, we can access methods and properties across other components in the entire project.