import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyARecord } from 'dns';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={
    email: "",
    password:"",
}
  constructor(private _auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }
login(){
this._auth.login(this.user).subscribe({
next:(res)=>{
  let tokenObject :any= res;
  localStorage.setItem('token', tokenObject.mytoken);
  this.router.navigate(['/home'])
  
},
error:(err)=>{
  console.log(err);
  
}
})
}
}
