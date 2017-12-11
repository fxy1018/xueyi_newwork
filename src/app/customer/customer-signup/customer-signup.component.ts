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
    this.customerService.getCustomerByUsername("abc")
        .subscribe(data=> {
          console.log(data)
        });
  }
  signup(): void{
    if (this.tmpUser.password1 != this.tmpUser.password2){
      this.signupMeg = "password not same"
    } else{
      this.signupMeg = "";
      this.customerService.getCustomerByUsername(this.tmpUser.username)
          .subscribe(
              data => {
                if (data) {
                  this.signupMeg = "email exist";
                } else {
                  this.customerService.createCustomer(this.tmpUser.username, this.tmpUser.password1)
                      .subscribe(data => {
                            this.newCustomer = data;
                            console.log(this.newCustomer)
                          },
                          error => console.log('Error :: ' + error.statusText))
                }
              },
              error => console.log("Error :: " + error.statusText)
          )

    }

  }

}
