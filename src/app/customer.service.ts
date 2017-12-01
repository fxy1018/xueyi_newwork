import { Injectable } from '@angular/core';
import { CUSTOMERS } from './mock-customers';
import { Customer } from "./customer";

@Injectable()
export class CustomerService {
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
      return(console.log("password not same"))
    }
    for (var i=0; i < CUSTOMERS.length; i++){
      var c = CUSTOMERS[i];
      if (c.email===email){
        return(console.log("email exist"))
      }
    }

    var newCustomer: Customer;
    newCustomer.cid = +CUSTOMERS[CUSTOMERS.length-1].cid + 1
    newCustomer.email = email;
    newCustomer.password = password1;
    CUSTOMERS.push(newCustomer)
    return(CUSTOMERS)
  }
}
