import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.css']
})
export class RichtextComponent implements OnInit{

  @Input() elementId: string;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEditorKeyup = new EventEmitter();
  constructor() { }
  editor;
  ngOnInit() {
  }
}
