import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentification/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    
  }

  logout(){
    localStorage.removeItem('token')
   window.location.reload();
   
  }


}
