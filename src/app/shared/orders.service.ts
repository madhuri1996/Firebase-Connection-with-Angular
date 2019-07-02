import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup ({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    completed: new FormControl(false)
  });

  createorder(data) {
    // tslint:disable-next-line:no-shadowed-variable
      return new Promise<any>((resolve, reject) => {
        this.firestore
            .collection('coffeeOrders')
            .add(data)
            .then(res => {
              console.log('Added document with ID: ', res.id);
            }, err => reject(err));
    });
  }

  getorder() {
    return this.firestore.collection('coffeeOrders').snapshotChanges();
  }

  updateOrder(docid) {
    this.firestore.collection('coffeeOrders').doc(docid).set({ completed: true }, { merge : true});
  }

  deleteOrder(docid) {
    this.firestore.collection('coffeeOrders').doc(docid).delete();
  }
}
