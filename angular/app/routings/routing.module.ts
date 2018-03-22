import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

// Components

import { UsersComponent } from '../components/users/users.component';

import { HomeConponent } from '../components/home/home.component';

import { UsersAddComponent } from '../components/users/users-add/users-add.component';

import { Page404Conponent } from '../components/errorPage/404/404.component';


const routers: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeConponent, data: { title: 'Home' } },
	{ path: 'users', component:UsersComponent, data: { title: 'User' } },
	{ path: 'usersadd', component:UsersAddComponent, data: { title: 'User Add' } },
	{ path: '**', component: Page404Conponent, data: { title: 'Page 404' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
