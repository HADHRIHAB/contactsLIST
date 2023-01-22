import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http : HttpClient) { }

  add(contact:any){
    return this.http.post(environment.url + 'contact/contacts' , contact)
  }
  
  getById(id:any){
   return this.http.get(environment.url+'contact/contacts/'+ id)
  }

  getByIdUser(idUser:any){
   return this.http.get(environment.url+'contact/contacts/'+ idUser)
  }

delete(id:any){
 return this.http.delete(environment.url+'contact/delete/'+ id)
}

update(id:any, contact:any){
  return this.http.put(environment.url+'contact/contacts/'+ id, contact)
}

}
