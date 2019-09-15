import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpRequestService} from '../../services/http-request.service';
import {Invitation} from '../invitation';
import {reply} from '../../entity/reply';

@Component({
  selector: 'app-invdetail',
  templateUrl: './invdetail.component.html',
  styleUrls: ['./invdetail.component.css']
})
export class InvdetailComponent implements OnInit {
  private InvId: number;
  private invDetial: Invitation;
  private replyInfo: reply[]=[];
  private
  isCanReply = false;
  time: any;
  likes: number = 2;
  constructor(private routerInfo: ActivatedRoute,
              private httpRequest: HttpRequestService) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => this.InvId = params['id'])
    this.getInvDetial();
    this.getReply();
    this.isLogin();
  }
  getInvDetial() {
    const  url = '/api/invs/invdetail/' + this.InvId;
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
  getReply() {
    const url = '/api/reply/reply/' + this.InvId;
    this.httpRequest.httpGet(url).then(data => {
      console.log(data.data);
      this.replyInfo = data.data;
      console.log(this.replyInfo);
    });
  }
}
