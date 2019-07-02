import { OrdersService } from './../shared/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private orderslistservice: OrdersService) { }

  coffeeorders;

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    return this.orderslistservice.getorder().subscribe(res => {
      console.log('response orders');
      this.coffeeorders = res;
    });
  }

  updateCompleted(docid) {
    this.orderslistservice.updateOrder(docid);
  }

  deletedoc(docid) {
    this.orderslistservice.deleteOrder(docid);
  }


}
