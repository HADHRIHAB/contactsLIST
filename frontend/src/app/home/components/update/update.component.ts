import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/authentification/service/auth.service';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  image="";
  id:any;
  contact: any;
  constructor(private act: ActivatedRoute, private _contact: ContactService, private router: Router) { }
  
 
  
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this._contact.getById(this.id).subscribe({
      next:(res)=>{
      this. contact= res
    console.log(res);
    },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  
update(){
  let fd = new FormData();
  fd.append('name', this.contact.name)
  fd.append('lastname', this.contact.lastname)
  fd.append('email', this.contact.email)
  fd.append('tel', this.contact.tel)
  fd.append('address', this.contact.address)
  fd.append('image', this.image)
  
if(this.image){this.image, this.image}

this._contact.update(this.id, fd).subscribe({
next:(res)=>{
  
this.router.navigate(['/contacts']);

},
error:(err)=>{
  console.log(err);
  
}

})
} 

selectImage(e:any){
this.image=e.target.files[0]
}


}
