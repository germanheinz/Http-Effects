import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/user.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction('[Users] Load Users Success',
    props<{ usersR: User[]}>()
);

export const loadUsersError = createAction('[Users] Load Users Error',
    props<{ payload: any}>()
);