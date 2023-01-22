import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/authentification/service/auth.service';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
contacts:any
user:any

  constructor(private _contacts : ContactService, private _auth: AuthService, private actroute: ActivatedRoute)  { }

  ngOnInit(): void {
    this.user= this._auth.getUserDataFromToken()
    this.getContacts();
  }

getContacts(){
  this._contacts.getByIdUser(this.user._id).subscribe({
  next:(res)=>{
  this.contacts = res
  },
  error:(err)=>{
    console.log(err);
    }

  })
}

del(id:any){
this._contacts.delete(id).subscribe({
  next:(res)=>{
    this.ngOnInit();
  },
  error:(err)=>{
    console.log(err);
    
  }
})
}

update(){

}



}
