import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base=environment.baseUrl;

  constructor(private Httpservice:HttpServiceService) { }

  registration(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
return this.Httpservice.postService(this.base+'/User/register',data,false,
  header);
}
}
