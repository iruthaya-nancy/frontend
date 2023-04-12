import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  private apiUrl = 'http://localhost:8080/customer/signup';

  constructor(private http:HttpClient) { }

  signUp(firstName:String,lastName:String,password:String,email:String,phoneNumber:String,doorNo:String,street:String,area:number,district:number,state:number){
    const userdata = {
      firstname: firstName,
      lastname: lastName,
      password: password,
      email: email,
      phoneNumber:phoneNumber,
      doorNo:doorNo,
      street:street,
      area:area,
      district:district,
      state:state
    };
    return this.http.post(this.apiUrl, userdata);
  }

  // signUp(data: any): Observable<any> {
  //   console.log(data);
  //   return this.http.post<any>(this.apiUrl, data);
  // }
}
