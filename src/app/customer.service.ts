import { Injectable } from '@angular/core';
import { Customer } from "./customer";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CustomerService {
  newCustomer: Customer;
  customer: any;
  constructor(private http: Http,
              private httpClient: HttpClient) { }

  private handleError<T>(operation='operation',
                         result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);
      return of(result as T);
    }
  }

  private usersApiUrl = 'http://localhost:3000/api/users';

  getCustomer(email, password): Observable<Customer[]>{
    let url = `${this.usersApiUrl}?username=${email}&password=${password}`;
    return this.httpClient.get<Customer[]>(url)
        .pipe(
          catchError(this.handleError('getCustomer', []))
        );
  }

  getCustomerById(cid:number): Observable<Customer[]>{
    const url = `${this.usersApiUrl}/${cid}`;
    return this.httpClient.get<Customer[]>(url)
        .pipe(
            catchError(this.handleError('getCustomerById', []))
        );
  }

  getCustomerByUsername(username:string): Observable<any>{
    const url = `${this.usersApiUrl}?username=${username}`;
    return this.httpClient.get(url)
        .pipe(
            catchError(this.handleError('getCustomerByUsername', []))
        );
  }

  createCustomer(email, password): Observable<any>{
    return this.httpClient.post(this.usersApiUrl, {username: email, password:password},
    httpOptions).pipe(
            catchError(this.handleError('createCustomer'))
        )
  }

  updateCustomer(customer: Customer): Observable<any>{

    return this.httpClient.put(this.usersApiUrl, customer,
        httpOptions).pipe(
            catchError(this.handleError<any>('updateCustomer'))
    );
  }


}
