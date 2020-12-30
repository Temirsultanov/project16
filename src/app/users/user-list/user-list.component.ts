import { Component, OnInit, Output } from '@angular/core';
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
  searchStr : string = '';
  idTop = true;
  idBottom = false;
  ageTop = false;
  ageBottom = false;
  mnow = new Date();
  onIdTop(){
    this.idTop = true;
    this.idBottom = false;
    this.ageBottom = false;
    this.ageTop = false;
  }
  onIdBottom(){
    this.idBottom = true;
    this.idTop = false;
    this.ageBottom = false;
    this.ageTop = false;
  }
  onAgeTop(){
    this.idTop = false;
    this.idBottom = false;
    this.ageBottom = false;
    this.ageTop = true;
  }
  onAgeBottom(){
    this.idTop = false;
    this.idBottom = false;
    this.ageBottom = true;
    this.ageTop = false;
  }
  constructor(private muserService : MuserService, private router : Router) { }
  departmentCodeToString(code : any) {
    switch (code) {
      case 0:
        return 'IT';
        break;
      case 1:
        return 'Sales';
        break;
      case 2:
        return 'Delivery';
        break;
      case 3:
        return 'Law';
        break;
      default:
        return '';
        break;
    }
  }
  dateToAge(date : any) {
    if (date !== null && date !== undefined) {
      let bMonth = date.slice(5,7);
      let bYear = date.slice(0, 4);
      let bDay = date.slice(8, 10);
      let one : number = 1;
      if (bMonth > this.mnow.getMonth()) {
        one = 0;
      }
      else if (bMonth = this.mnow.getMonth()) {
        if (bDay > this.mnow.getDay()) {
          one = 0;
        }
      }
      return this.mnow.getFullYear() - (Number(bYear) - one);
    }
    else{
      return '';
    }
  }
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
  onEditProfile(id: any){
    this.router.navigate([this.router.url, 'profile', id]);

  }

}
