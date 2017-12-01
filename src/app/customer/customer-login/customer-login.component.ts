import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Customer } from "../../customer";

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  visitor = {
        email : null,
        password: null,
    };
  customer: Customer;

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit() {

  }

  getCustomer(username, password): void{
    this.customer = this.customerService.getCustomer(username, password)
    console.log(this.customer)
  }

  

}
