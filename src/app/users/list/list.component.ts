import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = [];
  usersSubscription: Subscription;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.usersSubscription = this.userService.getUsers().subscribe(users => {
    this.users = users; 
    });
  }

}
