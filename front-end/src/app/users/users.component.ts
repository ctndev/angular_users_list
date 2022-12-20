import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User, UsersParameters } from '../_models/user.model';
import { UsersService } from '../_services/users.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from './user-details/user-details.component';


@Component({
  selector: 'ctn-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute,
              private route: Router, private location: Location,
              private dialog: MatDialog) { }

  subs: Subscription[] = []

  displayedColumns: string[] = ['name', 'gender', 'birth', 'actions'];

  users: User[]

  parameters: UsersParameters = {
    page:  1,
    gender: 'all',
    search: '',
    state: 'all'
  }

  states: string[] = ["Acre", "Alagoas", "Amapá", "Amazonas", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão",
  "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco",
  "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina",
  "São Paulo", "Sergipe", "Tocantins"]


  search(){
    this.parameters.page = 1
    this.location.replaceState(`/${this.parameters.page}/${this.parameters.gender}/${this.parameters.state}/${this.parameters.search}`)
    this.getUserList()
  }

  openDetails(user: User){
    this.dialog.open(UserDetailsComponent, {data: user})
  }

  //get list os users based in url params
  getUserList(){
    this.subs.push(
      this.usersService.allUsers(this.parameters).subscribe({
        next: (resp) => {
          if(resp){
            this.users = resp.data
          }
        },
        error: err => {
          console.log(err)
        }
      })
    )
  }

  //setting params to access by url
  settingParams(){
    this.subs.push(this.activatedRoute.params.subscribe(params => {

      this.parameters.page = params.page ? params.page : 1
      this.parameters.gender = params.gender ? params.gender : 'all'
      this.parameters.state = params.state ? params.state : 'all'
      this.parameters.search = params.search ? params.search : ''
      console.log(params)
      console.log(this.activatedRoute.snapshot.paramMap.get('page'))

    }))
  }

  load(){
    this.parameters.page++
    this.location.replaceState(`/${this.parameters.page}/${this.parameters.gender}/${this.parameters.state}/${this.parameters.search}`)
    this.getUserList()
  }

  ngOnInit(): void {
    this.settingParams()
    this.getUserList()
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => { try { sub.unsubscribe() } catch (error) { console.log('err-> ', error) }})
  }

}
