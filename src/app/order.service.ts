import { Injectable } from '@angular/core';
import { Order } from './preorder/order.model';
import {HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // private orders: Order[] = [];
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }



  // tslint:disable-next-line:typedef
  addPost(order){
    const newOrder: Order = order;
    console.log(newOrder);
    return this.http.post('http://localhost:3000/shirtForm', newOrder, {
      headers: {
        'Access-Control-Allow-Origin': '*'
          },
      })
      .pipe(tap(console.log));
  }
}
