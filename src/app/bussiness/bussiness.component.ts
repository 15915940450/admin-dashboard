import { Component, OnInit } from '@angular/core';
import rqs from '../rqs.js';
import api from '../api.js';

@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent implements OnInit {

  constructor() { }
  data;
  

  ngOnInit() {
    this.data='藕斷絲連';
    
    this.getData();
  }
  getData(){
    var sendData={
      date:1536319838000
    };
    rqs(api.commerceInfo,function(objRps){
      console.log(objRps);
    },{
      objSendData:sendData
    });
  }

}
