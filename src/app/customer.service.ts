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
      }
    }
    return(null)
  }

  getCustomerById(cid){

  }

  createCustomer(email, password1, password2): any{
    if (password1 != password2){
      return("password not same")
    }
    for (var i=0; i < CUSTOMERS.length; i++){
      var c = CUSTOMERS[i];
      if (c.email===email){
        return("email exist")
      }
    }

    var newCustomer = {
      cid: null,
      email: null,
      password: null,
      firstname: null,
      lastname: null,
      gender: null,
      birthdate: null,
    };

    newCustomer.cid = +CUSTOMERS[CUSTOMERS.length-1].cid + 1
    console.log(newCustomer.cid)
    newCustomer.email = email;
    newCustomer.password = password1;
    newCustomer.firstname = null;
    newCustomer.lastname= null;
    newCustomer.gender= null;
    newCustomer.birthdate= null;
    console.log(newCustomer)
    CUSTOMERS.push(newCustomer)
    return(newCustomer)
  }
}
