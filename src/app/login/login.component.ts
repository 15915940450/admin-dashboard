import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms';

/** @title Form field with label */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  formdata;

  ngOnInit() {
    this.formdata=new FormGroup({
      phone:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      password:new FormControl('',this.validateMima)
    });
  }
  validateMima(input){
    if(input.value.length<5){
      //invalid
      return ({
        password:true
      });
    }
  }
  login(data){
    console.log(data);
  }
}