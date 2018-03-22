import { Component, OnInit, OnDestroy } from '@angular/core';

import { UsersService } from '../../services/users.service';

import { Users } from '../../models/users';

@Component({
	selector: 'users-component',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, OnDestroy {

	users: Users[];

	constructor (private usersService: UsersService) {}

	ngOnInit() {
		this.loadingData();
	}

	loadingData() {
		this.usersService.getUsers().subscribe((response) => {
			this.users = response;
		});
	}

	ngOnDestroy() {

	}

}