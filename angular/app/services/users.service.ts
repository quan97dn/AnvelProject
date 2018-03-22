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
	
	private apiUrl:string = "http://127.0.0.1:8000/getlistuser";

	constructor(
        private http: HttpClient
    ) { }

	getUsers(): Observable<Users[]> {

		return this.http.get<Users[]>(this.apiUrl).pipe(
	  		tap(receivedUsers => console.log(`receivedUsers = ${JSON.stringify(receivedUsers)}`)),
	  		catchError(error => of([]))
  		);
  		
  	}
	

}
