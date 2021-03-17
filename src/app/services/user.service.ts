import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get("https://reqres.in/api/users?per_page=12")
    .pipe(
      map( resp => {
        console.log(resp['data']);
        return resp['data'];
      })
    )

  }

  getUser(id: string){
    return this.http.get(`https://reqres.in/api/users/${id}`)
    .pipe(
      map( resp => {
        console.log(resp['data']);
        return resp['data'];
      })
    )

  }

}
