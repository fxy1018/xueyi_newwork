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
        username : null,
        password: null,
    };
  customer: Customer;

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit() {

  }

  getCustomer(): void{
    this.customer = this.customerService.getCustomer(this.visitor.username, this.visitor.password);
    console.log(this.customer)
  }

  

}
