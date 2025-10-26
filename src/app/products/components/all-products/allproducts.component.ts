import { Component, OnInit } from '@angular/core';
import { AllProuductsService } from '../../services/all-prouducts.service';
import { Router } from '@angular/router';
import { product } from '../../models/products';

@Component({
  selector: 'app-allproducts',
  standalone: false,
  templateUrl: './allproducts.component.html',
})
export class AllProductsComponent implements OnInit {
  products: product[] = [];
  catagories: product[] = [];
  loading: boolean = false;
  cartproducts: any[] = [];
  addbutton: boolean = false;
  amount: Number = 0;
  constructor(private service: AllProuductsService, private router: Router) {}
  ngOnInit(): void {
    this.getproducts();
    this.getcategories();
    //  this.navigatetodetails(); // Removed because it requires a product argument
  }
  getproducts() {
    this.loading = true;
    this.service.getallProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;

        alert(error.message);
      }
    );
  }
  getcategories() {
    this.loading = true;

    this.service.getallcategories().subscribe(
      (res: any) => {
        this.catagories = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;

        alert(error.message);
      }
    );
  }
  filtercatagory(event: any) {
    let value = event.target.value;
    value == 'all' ? this.getproducts() : this.getproductcatagory(value);
  }
  getproductcatagory(keyword: string) {
    this.loading = true;

    this.service.getproductsByCategory(keyword).subscribe((res: any) => {
      this.loading = false;
      this.products = res;
    });
  }
  addtocart(event: any) {
    if ('cart' in localStorage) {
      this.cartproducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartproducts.find((item) => item.item.id == event.item.id);
      if (exist) {
        alert('Product already in cart');
        return;
      } else {
        this.cartproducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartproducts));
      }

    } else {
      this.cartproducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartproducts));
    }
  }
}
