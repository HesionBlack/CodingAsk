import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  dislikes: number;
  likes: number;

  constructor() { }

  ngOnInit() {
  }

  dislike() {

  }

  like() {

  }
}
