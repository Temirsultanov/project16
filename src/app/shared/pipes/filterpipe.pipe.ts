import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {
  isTouch : boolean = false;
  notTouchUsers : any = [];
  transform(users: any[], filterStr: string, it : boolean, ib : boolean, at: boolean, ab: boolean): any[] {
    let filteredItems = users;
    console.log(users);
    if (at) {
      filteredItems = filteredItems.sort(
        (a, b) => Number(b.birthdate.slice(0, 4)) - Number(a.birthdate.slice(0, 4))
      )
    } else if (ab) {
      filteredItems = filteredItems.sort(
        (a, b) => Number(a.birthdate.slice(0, 4)) - Number(b.birthdate.slice(0, 4))
      )
    } else if (!at && !ab) {
      if (!this.isTouch && users.length > 0) {
        for (let user of filteredItems) {
          this.notTouchUsers.push(user);
        }
        this.isTouch = !this.isTouch
      }
      if (this.notTouchUsers.length > 0) {
        filteredItems = this.notTouchUsers;
      } else{
        filteredItems = users;
      }

    }
    if (filterStr !== '') {
      filteredItems = filteredItems.filter(
        (user) => user.name.toLowerCase().indexOf(filterStr.toLowerCase()) !== -1 || user.surname.toLowerCase().indexOf(filterStr.toLowerCase()) !== -1
      );
    }
    if (it) {
      filteredItems = filteredItems.sort(
        (a, b) => a.id - b.id
      )
    } else if (ib) {
      filteredItems = filteredItems.sort(
        (a, b) => b.id - a.id
      )
    }
    return filteredItems;
  }

}
