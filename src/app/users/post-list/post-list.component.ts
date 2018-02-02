import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../api/model/user';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  @Input() posts: User[];

  constructor() { }

  ngOnInit() {
  }

}
