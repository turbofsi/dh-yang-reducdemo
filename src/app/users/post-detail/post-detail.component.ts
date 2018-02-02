import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../api/model/user';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

  @Input() post: User;

  constructor() { }

  ngOnInit() {
  }

}
