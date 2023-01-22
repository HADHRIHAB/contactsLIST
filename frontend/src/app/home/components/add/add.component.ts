import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentification/service/auth.service';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  image:any
 
  user:any
 
  contact={
  name:"",
  lastname:"",
  email:"",
  address:"",
  tel:""
 }

  constructor(private _contact: ContactService, private router : Router, private _auth: AuthService ) { }

  ngOnInit(): void {
    this.user= this._auth.getUserDataFromToken();
  }
  selectimg(event:any){
    this.image=event.target.files[0];
    }

  create(){
    let fd = new FormData();
    fd.append('name', this.contact.name)
    fd.append('lastname', this.contact.lastname)
    fd.append('email', this.contact.email)
    fd.append('tel', this.contact.tel)
    fd.append('address', this.contact.address)
    fd.append('image', this.image)
    fd.append('idUser', this.user._id)

    this._contact.add(fd).subscribe({
      next:(res)=>{
       this.router.navigate(['/contacts'])
      },
      error:(err)=>{
        console.log(err);
        
      }

    })
  }
  
}
