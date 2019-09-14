import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invdetial',
  templateUrl: './invdetial.component.html',
  styleUrls: ['./invdetial.component.css']
})
export class InvdetialComponent implements OnInit {
  likes: number;
  time: any;
  isCanReply: any = false;

  constructor() { }

  ngOnInit() {
  }

  like() {

  }
}
