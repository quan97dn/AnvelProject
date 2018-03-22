import { Component , OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
	selector: 'usersadd-edit',
	templateUrl: './users-add.component.html',
	styleUrls: ['./users-add.component.css']
})

export class UsersAddComponent implements OnInit, OnDestroy {

	public subscription: Subscription;

	public employee:any;

	constructor (private usersService: UsersService,
				 private router: Router
				) {

	}

	ngOnInit () {

	}

	saveForm(value: any) {	
		this.usersService.addUsers(value).subscribe((response)=> {
			if (response) {
				alert ("Add Complete !");
			}
		});
	}

	GotoUsers() {
		this.router.navigate(['users']);
	}

	ngOnDestroy () {
		
	}
	
}