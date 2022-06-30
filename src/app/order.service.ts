import { Injectable } from '@angular/core';
import { Order } from './preorder/order.model';
import {HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // private orders: Order[] = [];
  // private   = 'http://localhost:3000';

  constructor(private http: HttpClient) { }



  // tslint:disable-next-line:typedef
  orderTanktop(order){
    const newOrder: Order = order;
    console.log("DZIEŃ DOBRY!!!!!!!")
    console.log(order);
    console.log(newOrder);

    return this.http.post('https://topcat21.herokuapp.com/shirtForm', newOrder)
      .pipe(tap(console.log));
  }

  orderCleats(order){
    const newOrder: Order = order;
    console.log(newOrder);

    return this.http.post('https://topcat21.herokuapp.com/shoesForm', newOrder)
      .pipe(tap(console.log));
  }
}
