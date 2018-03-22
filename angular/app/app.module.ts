import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routings/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';

import { UsersComponent } from './components/users/users.component';
import { UsersAddComponent } from './components/users/users-add/users-add.component';

import { HomeConponent } from './components/home/home.component';
import { Page404Conponent } from './components/errorPage/404/404.component';

// Services

import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeConponent,
    UsersAddComponent,
    Page404Conponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
