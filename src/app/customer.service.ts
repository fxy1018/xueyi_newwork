import { Injectable } from '@angular/core';
import { CUSTOMERS } from './mock-customers';
import { Customer } from "./customer";

@Injectable()
export class CustomerService {
  newCustomer: Customer;

  constructor() { }
  getCustomer(email, password): any{
    for (var i=0; i < CUSTOMERS.length; i++){
      var c = CUSTOMERS[i];
      if (c.email===email && c.password===password){
        return(c.cid)
      }else {
        return(null)
      }
    }
  }

  getCustomerById(cid){

  }

  createCustomer(email, password1, password2): any{
    if (password1 != password2){
      console.log("password not same")
      return(null)
    }
    for (var i=0; i < CUSTOMERS.length; i++){
      var c = CUSTOMERS[i];
      if (c.email===email){
        console.log("email exist")
        return(null)
      }
    }

    console.log(+CUSTOMERS[CUSTOMERS.length-1].cid + 1);
    this.newCustomer.cid = +CUSTOMERS[CUSTOMERS.length-1].cid + 1
    this.newCustomer.email = email;
    this.newCustomer.password = password1;
    CUSTOMERS.push(this.newCustomer)
    console.log(CUSTOMERS)
    return(this.newCustomer)
  }
}
