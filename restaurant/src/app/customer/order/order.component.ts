import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PaymentmodeServiceService } from '../customerServices/paymentmode-service.service';
import { paymentmode } from '../customerServices/paymentmode.model';
import { OrderServiceService } from '../customerServices/order-service.service';
import { NgForm } from '@angular/forms';
import { order } from '../customerServices/Order.model';
import { DeleteOrderService } from '../customerServices/delete-order.service';
import { FoodItemService } from '../customerServices/food-item.service';
import { menuItem } from '../customerServices/menu.model';
/*
  to confirm order
  1.menuid from menu component its in local storage
  2.customer id from customer component in  ,,
  3.choose the payment mode then display the food id from the local storage 
*/
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers:[OrderServiceService ]
})
// this requires customerid,menu id from menu and payment mode id from drop down then send this mail  
export class OrderComponent implements OnInit {
    
  customerId!:number;// as requestparam
  menuId!:number;// in body
  buttonType!:any
  paymentmodes!:paymentmode[];
  paymentid !:number;
  disableButton:boolean =  true
  item!:menuItem[];
 

  constructor(private http:HttpClient,private router:Router,private paymentmodeservice:PaymentmodeServiceService,private orderService:OrderServiceService,private deleteOrderService:DeleteOrderService,private getfoodItem:FoodItemService) {
      //this.paymentid = 0;
   }

  ngOnInit(): void {
        this.getfoodItem.foodItem().subscribe(
          item =>{this.item = item.data;
          },error=>console.log(error))

    this.paymentmodeservice.getPaymentMode().subscribe(
      paymentmodes => {this.paymentmodes = paymentmodes.data},
      error => console.log(error)
    )
  }
  food = {
    name: '',
    amount: '',
  };

  onSubmit(form:NgForm){
    // do i have to pass the cqustomer id and (payment id in the form)?
  this.disableButton = false;
  const data = form.value;
  console.log(data);
  localStorage.setItem('paymentid',data.PaymentMode)
  // console.log(form.value.quantity);
  setTimeout(() => {
    this.disableButton = true;
  }, 30000); // disable button after 5 seconds
  

     this.orderService.confirmOrder();
  
    //console.log(localStorage.getItem('paymentid'));
    //console.log(data.Quantity);
    
    //this.router.navigate(["menu"])
    //this.toastr.success('Form submitted successfully!');
    //const quantity = window.prompt('Enter quantity:');
   
}

onClick(buttonType:any){
  if(buttonType === "delete"){
      this.deleteOrderService.deleteOrder();
  }
  else {
    
      this.router.navigate(["login"])
      window.localStorage.removeItem("id");
      
    
  }
  
 
}

deleteFood(id:any){


    const food = window.localStorage.getItem('menu');
    if(food!=null){
       var menu = JSON.parse(food);
    }
    
    delete menu[id];
    window.localStorage.setItem('menu', JSON.stringify(menu));
    this.item = this.item.filter(food => food.id != id)
    console.log(this.item);
}

}
