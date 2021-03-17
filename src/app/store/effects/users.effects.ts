import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs/operators";
import { UserService } from "src/app/services/user.service";
import * as usersActions from "../actions/users.actions";

@Injectable()
export class UsersEffects{

    constructor(private actions$: Actions,
                private userService: UserService){}

    //First Effect
    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType( usersActions.loadUsers ),
            tap(data => console.log('effect tap', data)),
            mergeMap(
                () => this.userService.getUsers()
                .pipe(
                    tap( data => console.log('getUsers effect', data)),
                    map( data => usersActions.loadUsersSuccess({ users: data }))
                )
            )
        )
    );

}