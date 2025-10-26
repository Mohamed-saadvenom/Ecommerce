import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AllProuductsService } from '../../../products/services/all-prouducts.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(
    private service: CartService,
    private build: FormBuilder,
    private productservice: AllProuductsService
  ) {}
  cartproducts: any[] = [];
  carts: any[] = [];
  products: any[] = [];
  total = 0;
  success :boolean = false;
  form!: FormGroup;
  model: any;
  ngOnInit(): void {
    this.getcartproducts();
  }

  getcartproducts() {
    if ('cart' in localStorage) {
      this.cartproducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getcarttotal();
  }
  getcarttotal() {
    this.total = 0;
    for (let x in this.cartproducts) {
      this.total +=
        this.cartproducts[x].item.price * this.cartproducts[x].quantity;
    }
  }
  addamount(index: number) {
    this.cartproducts[index].quantity++;
    this.getcarttotal();
    localStorage.setItem('cart', JSON.stringify(this.cartproducts));
  }
  minsamount(index: number) {
    if (this.cartproducts[index].quantity > 1) {
      this.cartproducts[index].quantity--;
    }
    this.getcarttotal();
    localStorage.setItem('cart', JSON.stringify(this.cartproducts));
  }
  removeitem(index: number) {
    this.cartproducts.splice(index, 1);
    this.getcarttotal();
    localStorage.setItem('cart', JSON.stringify(this.cartproducts));
  }
  clearcart(){
    this.cartproducts = [];
    this.getcarttotal();
    localStorage.setItem('cart', JSON.stringify(this.cartproducts));
  }
  addcart(){
    let products = this.cartproducts.map(item=>{
      return {productId:item.item.id,quantity:item.quantity}
    })
    this.model = {
      userId:5,
      date:new Date(),
      products:products
    }
    this.service.createnewcart(this.model).subscribe(res=>{
      this.success = true;
    })
  }
}
