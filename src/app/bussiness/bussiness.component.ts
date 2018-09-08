import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import rqs from '../rqs.js';
import api from '../api.js';

@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent implements OnInit {

  constructor(private router:Router) { }
  data;
  rqs;
  

  ngOnInit() {
    this.data='藕斷絲連';
    this.rqs=rqs;
    
    this.getData();
  }
  getData(){
    var sendData={
      date:1536319838000
    };
    this.rqs(api.commerceInfo,function(objRps){
      console.log(objRps);
    },{
      objSendData:sendData
    });
  }

}
