import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router: Router) { }


  login(user:any){
    return this.http.post(environment.url+'user/login', user)
  }

  register(user:any){
    return this.http.post(environment.url+'user/register', user)
  }
  isLoggedIn(){
    let myTokenFromLocalstorage= localStorage.getItem('token')

    if(myTokenFromLocalstorage){
      return true
    }else{return false}
  }
  getUserDataFromToken(){
    let token = localStorage.getItem('token');
    if(token){
      let data = JSON.parse(window.atob(token.split('.')[1]))
      return data
    }
  }
}
