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
        return(c)
      }
    }
    return(null)
  }

  getCustomerById(cid){

  }

  createCustomer(email, password1, password2): any{
    if (password1 != password2){
<<<<<<< HEAD
      console.log("password not same")
      return(null)
=======
      return("password not same")
>>>>>>> 2bba583bba14e8da1131c4c6cb933cbc5e30f8e8
    }
    for (var i=0; i < CUSTOMERS.length; i++){
      var c = CUSTOMERS[i];
      if (c.email===email){
<<<<<<< HEAD
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
=======
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
>>>>>>> 2bba583bba14e8da1131c4c6cb933cbc5e30f8e8
  }
}
