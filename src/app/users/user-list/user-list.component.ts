import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Muser } from 'src/app/shared/models/muser.model';
import { MuserService } from 'src/app/shared/services/muser.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : Muser[] = [];
  constructor(private muserService : MuserService, private router : Router) { }

  ngOnInit(): void {
    this.getData();
  }
  async getData() {
    try {
      let usersGetted = this.muserService.getAll();
      this.users = await usersGetted == null && usersGetted == undefined ? [] : await usersGetted;
    } catch (error) {
      console.log(error);
    }
  }
  onAddProfile(){
    this.router.navigate([this.router.url, 'profile']);
  }
  onEditProfile(id: number){
    this.router.navigate([this.router.url, 'profile', id]);
  }

}
