import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private isShow = false;
  private loginInfo = {};
  constructor(private router: Router) { }

  ngOnInit() {
    this.isLogin();
  }
  isLogin() {
    if(sessionStorage.length !== 0 ) {
      this.loginInfo = {
        username: sessionStorage.getItem('username'),
        registertime: sessionStorage.getItem('registertime')
      };
      this.isShow = true;
    }
  }

  doLogOut() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
