import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'src/assets/js/wow.js';
import { LoginRequest } from '../../shared/model/login.request.model';
import { GeneralService } from '../../shared/services/general.service';
import { HttpService } from '../../shared/services/http.service';

import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  public form: FormGroup;
  public userName: AbstractControl;
  public password: AbstractControl;

  loginRequest: LoginRequest = new LoginRequest();
  isLogin: boolean;

  constructor(private service: GeneralService, private ser: HttpService, private fb: FormBuilder) {
    this.isLogin = false;

    this.form = fb.group({
      'userName': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });

    this.userName = this.form.controls['UserName'];
    this.password = this.form.controls['Password'];
  }

  ngOnInit() {
  }
  ngAfterViewInit() {

    new WOW().init();
  }

  login(values: any) {
    console.log('onSubmit - login', this.loginRequest);
    console.log('login - values', values);
    this.service.login(this.loginRequest).subscribe(res => {
      console.log('getArticles - res', res);
      if (res.Success) {
        this.isLogin = true;
        this.ser.saveObjectOnLocalStorage('username', this.loginRequest.username);
        this.ser.saveObjectOnLocalStorage('token', res.item.Token);
       }
    });
  }

  public onSubmit(values: any) {
    console.log('onSubmit - values', values);
  }
}
