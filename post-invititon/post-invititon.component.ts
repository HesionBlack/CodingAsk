import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-invititon',
  templateUrl: './post-invititon.component.html',
  styleUrls: ['./post-invititon.component.css']
})
export class PostInvititonComponent implements OnInit {

  validateForm: FormGroup;

  submitForm(): void {

  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.email, Validators.required]],
      content: [null, [Validators.required]]
    });
  }

  keyupHandler(event) {
    console.log(event);

  }
}
