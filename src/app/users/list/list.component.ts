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
  loading: boolean;
  error: any;

  usersSubscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // Commented for make use of Effects
    // this.usersSubscription = this.userService.getUsers().subscribe(users => {
    // this.users = users; 
    // });

    this.store.select('users').subscribe(({users, loading, error}) => {
      console.log(users);
      this.users   = users;
      this.loading = loading;
      this.error   = error;
    });

    this.store.dispatch(loadUsers())
  }

}
