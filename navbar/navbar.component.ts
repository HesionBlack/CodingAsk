import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private isShow = false;
  private loginInfo = {};

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.isLogin();
  }

  isLogin() {
    if (sessionStorage.length !== 0) {
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

  swichpage(number: number) {
    if (number == 1) {
      this.router.navigateByUrl('/type/1');
    } else if (number == 2){
      this.router.navigateByUrl('/type/2');
    } else if (number == 3 ) {
      this.router.navigateByUrl('/type/3');
    } else {
      this.router.navigateByUrl('/index');
    }
  }
}
