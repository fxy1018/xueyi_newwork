import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Customer } from "../../customer";
import {Observable} from "rxjs";


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  visitor = {
        username: null,
        password: null,
    };
  customer: Customer[];

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit() {

  }


  login(): void{
    console.log(this.visitor.username, this.visitor.password);
    this.customerService.getCustomer(this.visitor.username, this.visitor.password)
        .subscribe(data => {this.customer = data;
                            console.log(this.customer)},
                  error=> console.log("Error :: " + error.statusText));
  }



}
