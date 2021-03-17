import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UserService } from "src/app/services/user.service";
import * as usersActions from "../actions/";

@Injectable()
export class UserEffects{

    constructor(private actions$: Actions,
                private userService: UserService){}

    //First Effect
    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType( usersActions.loadUser ),
            tap(data => console.log('effect tap', data)),
            mergeMap(//Important different here!!
                ( action ) => this.userService.getUser( action.id )
                .pipe(
                    tap( data => console.log('getUsers effect', data)),
                    map( data => usersActions.loadUserSuccess({ user: data })),
                    catchError( err => of(usersActions.loadUserError({payload: err}) ))
                )
            )
        )
    );

}