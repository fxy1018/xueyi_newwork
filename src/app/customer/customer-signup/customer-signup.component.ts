import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../customer.service";
import { Customer } from "../../customer";

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {
  newuser = {
    email: null,
    password1:null,
    password2:null
  };

  customer: Customer;

  constructor(
      private customerService: CustomerService,

  ) { }

  ngOnInit() {
  }
  createCustomer():void{
    this.customer = this.customerService.createCustomer(this.newuser.email, this.newuser.password1, this.newuser.password2);
    console.log(this.customer)
  }


}
