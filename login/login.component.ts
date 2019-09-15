import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpRequestService} from '../../services/http-request.service';
import { Router } from '@angular/router';
import { SessionstorgeService } from '../session/sessionstorge.service';
import {Invitation} from '../invitation';
import {error} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forModel: FormGroup;
  url: any = '/api/user/login.do';
  private userMsg: { username: any, password: any};
  private isFail: any = true;
  private loginFailMsg: any = '';

  constructor(public fb: FormBuilder,
              public httpRequest: HttpRequestService,
              public router: Router,
              public sessionSession: SessionstorgeService ) {
    this.forModel = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  doLogin() {
    this.userMsg = {
      username: this.forModel.value.username,
      password: this.forModel.value.password
    }
    if (this.forModel.valid) {
      this.httpRequest.httpPost(this.url, this.userMsg).then(data => {
        console.log('loginCmp:' );
        if (data.message === 'success' ) {
            this.sessionSession.setSession('id', data.data.id);
            this.sessionSession.setSession('username', data.data.username);
            this.sessionSession.setSession('registertime', data.data.registertime);

            console.log(this.sessionSession.getSession('小明'));
            this.router.navigateByUrl('/index');
        } else {
          this.isFail = false;
          this.loginFailMsg = '用户名或者密码错误,登录失败,请重新登录';
        }

      });
    }
    // console.log(this.forModel.value.password)
  }
}
