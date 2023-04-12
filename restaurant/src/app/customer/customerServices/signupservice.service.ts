import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  private apiUrl = 'http://localhost:8080/customer/signup';

  constructor(private http:HttpClient) { }

  signUp(firstname:String,lastname:String,password:String,email:String,doorNo:String,phone:String,streetName:String,area:number,district:number,state:number){
    const userdata = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      doorNo:doorNo,
      streetName:streetName,
      phoneNumber:phone,
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
