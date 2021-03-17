import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = [];
  usersSubscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // Commented for make use of Effects
    // this.usersSubscription = this.userService.getUsers().subscribe(users => {
    // this.users = users; 
    // });

    this.store.select('users').subscribe(resp => {
      console.log(resp);
      console.log(resp.users);
      this.users = resp.users;
    });

    this.store.dispatch(loadUsers())
  }

}
