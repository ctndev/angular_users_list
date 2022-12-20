import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../util/api';
import { ResponseUsers, UsersParameters } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  allUsers(parameters: UsersParameters): Observable<ResponseUsers>{
    let params = `?page=${parameters.page}&gender=${parameters.gender}&state=${parameters.state}&s=${parameters.search}&sort=asc`
    return this.http.get<ResponseUsers>(`${API}/users${params}`)
  }

}
