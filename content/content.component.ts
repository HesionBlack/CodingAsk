import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpRequestService} from '../../services/http-request.service';
import {environment} from '../../../environments/environment';
import {Invitation} from '../invitation';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router,
              private httpService: HttpRequestService) { }

  private invitation: Invitation[] = []

  ngOnInit() {
      this.getInv();
  }

  pushInvitation() {
    this.router.navigateByUrl('/Inv');
  }
  getInv() {
    this.httpService.httpGet('/api/invs/inv')
         .then(data => {
           console.log(data.data);
           this.invitation = data.data;
           console.log(this.invitation);
         });
  }
}
