import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  providers: [UsersService]
})
export class ProfileComponent implements OnInit {
  

  user;
  id;
  constructor(
    private us: UsersService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getId();
    this.us.getUser( this.id )
      .then( res => {
        this.user = res.json();
      } )
  }

  getId(){
    this.router.params.subscribe( route => {
      this.id = route['id'];
    } )
  }

}
