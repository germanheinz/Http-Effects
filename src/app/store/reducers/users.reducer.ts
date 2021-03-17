import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions'; 

export interface UsersState {
    usersR  : User[];
    loaded : boolean;
    loading: boolean;
    error  : any; 
}

export const usersInitialState: UsersState = {
    usersR  : [],
    loaded : false,
    loading: false,
    error  : null 
}

const _usersReducer = createReducer(usersInitialState,
    on(loadUsers,        state => ({ ...state, loading: true})),
    
    on(loadUsersSuccess, (state, {usersR}) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        users: [...usersR],
        error: null
    })),

    on(loadUsersError, (state, {payload}) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: payload
    })),
    

);

export function usersReducer(state, action) {
    return _usersReducer(state, action);
}