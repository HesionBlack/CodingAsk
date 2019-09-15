import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpRequestService} from '../../services/http-request.service';
import {Invitation} from '../invitation';

@Component({
  selector: 'app-invdetail',
  templateUrl: './invdetail.component.html',
  styleUrls: ['./invdetail.component.css']
})
export class InvdetailComponent implements OnInit {
  private productId: number;
  private invDetial: Invitation;
  isCanReply = false;
  time: any;
  likes: number = 2;
  constructor(private routerInfo: ActivatedRoute,
              private httpRequest: HttpRequestService) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => this.productId = params['id'])
    this.getInvDetial();
    this.isLogin();
  }
  getInvDetial() {
    const  url = '/api/invs/invdetail/' + this.productId;
    console.log(url);
    this.httpRequest.httpGet(url).then(data => {
      console.log(data.data);
      this.invDetial = data.data;
      console.log(this.invDetial);
    });
  }

  like() {

  }
  isLogin() {
    if (sessionStorage.length !== 0) {
      this.isCanReply = true;
    }
  }
}
