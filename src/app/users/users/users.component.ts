import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { AppState } from 'src/app/store/app.reducers';
import { loadUser } from '../../store/actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User;
  
  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('user').subscribe( ({user}) => {
        this.user = user;
    });

    this.router.params.subscribe(({id}) => {
      console.log(id);
      this.store.dispatch( loadUser({id}) )
    });


  }

}
