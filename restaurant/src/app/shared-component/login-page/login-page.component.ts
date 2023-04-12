import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  //constructor() { }
  public loginForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //email: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  })
}

  doLogin()
  {
    if(this.loginForm.valid){
      this.http.post<any>("http://localhost:8080/customer/login",this.loginForm.value)
      .subscribe(res=>{
        //this.toastrService.success('Message Success!', 'Title Success!');
        this.loginForm.reset()
        this.router.navigate(["login"])
      },err=>{
        //this.toastrService.error('Message Error!', 'Title Error!');
      })
    }
    

}

}


