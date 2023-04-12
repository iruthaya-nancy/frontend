import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupserviceService  } from '../customerServices/signupservice.service';
import { NgForm } from '@angular/forms';
import { Area } from '../customerServices/area.model';
import { AreaserviceService } from '../customerServices/areaservice.service';
import { District } from '../customerServices/district.model';
import { DistrictserviceService } from '../customerServices/districtservice.service';
import { State } from '../customerServices/state.model';
import { StateserviceService } from '../customerServices/stateservice.service';



@Component({

  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
  providers:[SignupserviceService ]
 
})
export class SignupPageComponent implements OnInit {

  
  firstname:String;
  lastname: string;
  email: string;
  password: string;
  retype:String;
  phone:String;
  doorNo:String;
  streetName:String;
  areas!: Area[];
  selectedAreaId: number;
  districts!: District[];
  selectedDistrictId : number;
  states!:State[];
  selectedStateId :number;

  

  // public signUpForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,private signupService: SignupserviceService,private areaService:AreaserviceService,private distrctService:DistrictserviceService,private stateService :StateserviceService ) {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
    this.retype = '';
    this.phone = '';
    this.doorNo = '';
    this.streetName = '';
    this.selectedAreaId = 0;
    this.selectedDistrictId = 0;
    this.selectedStateId = 0;

   }


  // ngOnInit(): void {
  //   this.signUpForm = this.formBuilder.group({
  //     email: ['',Validators.required],
  //     password: ['', Validators.required]
  // })

  ngOnInit() {
    // Retrieve the list of areas from the server
    this.areaService.getAreas().subscribe(
      areas => {this.areas = areas.data; console.log(areas)},
      error => console.log(error)
    );

    this.distrctService.getDistricts().subscribe(
      districts => {this.districts= districts.data; console.log(districts)},
      error => console.log(error)
    );

    this.stateService.getStates().subscribe(
      states=> {this.states = states.data;},
      error => console.log(error)
    );
  }

  onSubmit() {
    // Submit the customer area details to the server
    //console.log('Selected area ID:', this.selectedAreaId);
    // ...
    //const data = { firstname: this.firstname, lastname:this.lastname, email: this.email, password: this.password,phone: this.phone,doorNo:this.doorNo,streetName:this.streetName ,selectedAreaId:this.selectedAreaId,selectedDistrictId:this.selectedDistrictId,selectedStateId:this.selectedStateId};
    this.signupService.signUp(this.firstname,this.lastname, this.email,  this.password,this.phone,this.doorNo,this.streetName ,this.selectedAreaId,this.selectedDistrictId,this.selectedStateId).subscribe(response => {
      console.log(response);
    });
  }
}

// doSignIn(){
//   if(this.signUpForm.valid){this.http.post<any>("http://localhost:8080/customer/signup",this.signUpForm.value)
//   .subscribe(res=>
//     {
//     this.signUpForm.reset()
//     this.router.navigate(["Menu"])},
//     err=>{
//       //this.toastrService.error('Message Error!', 'Title Error!');
//       window.alert("sign failed")
//     })
//   }

  



