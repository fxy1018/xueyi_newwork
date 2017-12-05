import { Component, OnInit } from '@angular/core';

import { CustomerService } from "../../customer.service";
import { Customer } from "../../customer";

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {

  tmpUser = {
    username: null,
    password1:null,
    password2:null,
  }

  newCustomer: Customer;
  signupMeg: string;
  constructor(
    private customerService:CustomerService,
  ) { }

  ngOnInit() {
  }
  createCustomer():void{
    this.customer = this.customerService.createCustomer(this.newuser.email, this.newuser.password1, this.newuser.password2);
    console.log(this.customer)
  }


  signup(): void{
    var res = this.customerService.createCustomer(this.tmpUser.username, this.tmpUser.password1, this.tmpUser.password2);
    if (res){
      this.newCustomer = res
    }else if (res=="password not same"){
      this.signupMeg = "password not same";
    }else if (res=="email exist"){
      this.signupMeg = "email exist";
    }
  }

}
