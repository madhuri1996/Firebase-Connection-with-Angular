import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersservice: OrdersService) { }

  ngOnInit() {
  }

  onsubmit() {
    const values = this.ordersservice.form.value;
    console.log('form values', values);
    this.ordersservice.createorder(values)
    .then(res => {
      console.log('create order called');
    });
  }

}
