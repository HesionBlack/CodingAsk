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
  private replyInfo: reply[] = [];

  isCanReply = false;
  time: any;
  CanReply = true;

  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';
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
    // const  url = '/api/reply/reply/like/' + this.InvId;
    // this.likes = this.likes + 1;
    // this.httpRequest.httpGet(url);
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

  handleSubmit(): void {
    console.log('------');
  }
}
