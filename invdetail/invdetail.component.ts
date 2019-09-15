import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpRequestService} from '../../services/http-request.service';

@Component({
  selector: 'app-invdetail',
  templateUrl: './invdetail.component.html',
  styleUrls: ['./invdetail.component.css']
})
export class InvdetailComponent implements OnInit {
  private productId: number;
  constructor(private routerInfo: ActivatedRoute,
              private httpRequest: HttpRequestService) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => this.productId = params['id'])
    console.log(this.productId);
  }

}
