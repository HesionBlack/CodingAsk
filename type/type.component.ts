import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpRequestService} from '../../services/http-request.service';
import {Invitation} from '../invitation';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  public InvId: number;
  public Invtype: any;
  constructor(private router: Router,
              private httpService: HttpRequestService,
              private routerInfo: ActivatedRoute) { }

  private invitation: Invitation[] = []

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => this.InvId = params['id']);
    console.log(this.InvId);
    this.invJudge();
    this.getInvById();
  }

  pushInvitation() {
    this.router.navigateByUrl('/Inv');

  }
  getInvById() {
    const getUrl = '/api/invs/inv/' + this.Invtype;
    this.httpService.httpGet(getUrl)
      .then(data => {
        console.log(data.data);
        this.invitation = data.data;
        console.log(this.invitation);
      });
  }

  invJudge() {

    if ( this.InvId == 1) {
      this.Invtype = 'JAVA基础';
    } else if ( this.InvId == 2 ) {
      this.Invtype = 'Spring全家桶';
    } else if (this.InvId == 3 ) {
      this.Invtype = 'Mybatis';
    } else {
      this.Invtype = '全部';
    }
  }
}
