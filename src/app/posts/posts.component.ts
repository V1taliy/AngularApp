import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
  providers: [UsersService]
})
export class PostsComponent implements OnInit {

  posts;
  @Input() userId;
  constructor(
    private us: UsersService,
  ) { }

  ngOnInit() {
    this.us.getPosts( this.userId ).then( res => {
      this.posts = res.json();
    } );
  }

}
