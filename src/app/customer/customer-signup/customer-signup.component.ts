import { Component, OnInit } from '@angular/core';
import { Customer } from "../../customer";
import { CustomerService } from "../../customer.service";
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
