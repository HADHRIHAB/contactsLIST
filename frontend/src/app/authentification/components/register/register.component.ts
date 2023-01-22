import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user={
  name:"",
  lastname:"",
  email:"",
  password:"",
}
  constructor(private _auth: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
save(user:any){
  this._auth.register(user).subscribe({
    next:(res)=>{
      this.route.navigate(['/login'])
      console.log(res);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
