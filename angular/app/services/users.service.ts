// Import modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Import service
import { Users } from '../models/users';

@Injectable()
export class UsersService {
	
	private apiUrl:string = "http://127.0.0.1:8000/";

	constructor(
        private http: HttpClient
    ) { }

	getUsers(): Observable<Users[]> {

		return this.http.get<Users[]>(this.apiUrl + 'getlistuser').pipe(
	  		tap(receivedUsers => console.log(`receivedUsers = ${JSON.stringify(receivedUsers)}`)),
	  		catchError(error => of([]))
  		);
  		
  	}

  	addUsers(newUsers: Users): Observable<Users> {
	  	const httpOptions = {
	  		headers: new HttpHeaders({'Content-Type': 'application/json'})
	  	};
	  	return this.http.post<Users>(this.apiUrl + '', newUsers, httpOptions).pipe(
	  		tap((users: Users) => console.log(`Insert Users = ${JSON.stringify(users)}`)),
	  		catchError(error => of(new Users()))
  	);
  }
	

}
