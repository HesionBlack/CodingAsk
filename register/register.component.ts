import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpRequestService} from '../../services/http-request.service';
import {Router} from '@angular/router';
import {SessionstorgeService} from '../session/sessionstorge.service';
import {Md5} from 'ts-md5';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isFail: any = true;
  RegisterFailMsg: any = '';
  forModel: FormGroup;
  url: any = '/api/user/register.do';
  private userMsg: { username: any, password: any};
  constructor(public fb: FormBuilder,
              public httpRequest: HttpRequestService,
              public router: Router,
              public sessionSession: SessionstorgeService) {
    this.forModel = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  doRegister() {
    this.userMsg = {
      username: this.forModel.value.username,
      password: Md5.hashStr(this.forModel.value.password)
    }
    console.log(this.userMsg);
    if (this.forModel.valid) {
      this.httpRequest.httpPost(this.url, this.userMsg).then(data => {
        console.log('RegisterCmp:' );
        console.log(data);
        // if (data.message === 'success' ) {
        //   // this.router.navigateByUrl('/login');
        // } else {
        //   this.isFail = false;
        //   this.RegisterFailMsg = '用户名已存在,请前往<a routerLink="/login">登录</a>';
        // }
      });
    }
  }
}
