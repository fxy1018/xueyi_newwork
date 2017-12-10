import { Injectable } from '@angular/core';
import { CUSTOMERS } from './mock-customers';
import { Customer } from "./customer";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';



@Injectable()
export class CustomerService {
  newCustomer: Customer;
  customer: any;
  constructor(private http: Http) { }

  getCustomer(email, password): any{
    let query = "/api/users?username=".concat(email, "&" , "password=" , password);
    this.http.get(query)
        .map(response => this.customer = response.json().data[0]);
  }

  getCustomerById(cid): any{
    return cid;
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
    console.log(newCustomer.cid);
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
