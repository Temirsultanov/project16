import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MuserDepartment } from 'src/app/shared/models/muser.model';
import { MuserService } from 'src/app/shared/services/muser.service';
import emailMask from 'text-mask-addons/dist/emailMask';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id! : number;
  user: any;
  userForm! :FormGroup;
  muserDepartment = MuserDepartment;
  phoneMask = [ '+', 7,'(', /[1-9]/, /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  constructor(
    private activatedRoute : ActivatedRoute,

    private muserService : MuserService,
    private router : Router
    ) {
    this.activatedRoute.params.subscribe(params => {
      if (params.id !== null && params.id !== undefined) {
        this.id = params.id;
      }
      else{

      }
    })
   }

  ngOnInit(): void {
    this.userForm = new FormGroup ({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      patronymic: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      birthdate: new FormControl(null, Validators.required),
      department: new FormControl(null, Validators.required),
    });
    this.getData();
  }
  async getData() {
    if (this.id !== null && this.id !== undefined) {
      try {
        let user = this.muserService.getOneById(this.id);
        this.user = await user;
      } catch (error) {
        console.error(error);
      }
      this.userForm.patchValue({
        name: this.user.name,
        surname: this.user.surname,
        patronymic: this.user.patronymic,
        email: this.user.email,
        phone: this.user.phone,
        birthdate: this.user.birthdate,
        department: this.user.department,
      })
    }
  }
  async onDelete() {
    try {
      await this.muserService.deleteOne(this.id);
    } catch (error) {
      console.error(error);
    }
    this.router.navigate(['/users']);
  }
  async onSave(){
      if (this.id !== null && this.id !== undefined) {
        try {
          await this.muserService.putOne(this.id, this.userForm.value)
        } catch (error) {
          console.log(error);
        }
      }
      else{
        try {
          let res : any = await this.muserService.postOne(this.userForm.value);
          this.router.navigate([this.router.url, res['id']]);

        } catch (error) {
          console.log(error);
        }

      }
  }
}
