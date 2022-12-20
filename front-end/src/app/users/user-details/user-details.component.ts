import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'ctn-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) { }

  fullName(){
    return `${this.data.name.first} ${this.data.name.last}`
  }
}
