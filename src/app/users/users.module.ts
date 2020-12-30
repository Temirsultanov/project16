import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterpipePipe } from '../shared/pipes/filterpipe.pipe';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserEditComponent,
    FilterpipePipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule

  ],
})
export class UsersModule { }
