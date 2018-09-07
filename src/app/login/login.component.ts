import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

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
      emailid:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      mima:new FormControl('',this.validateMima)
    });
  }
  validateMima(input){
    if(input.value.length<5){
      //invalid
      return ({
        mima:true
      });
    }
  }
  onClickSubmit(data){
    console.log(data);
  }

}
