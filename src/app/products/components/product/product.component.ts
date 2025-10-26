import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { product } from '../../models/products';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  @Input() data!:product
  @Output() item = new EventEmitter()
  addbutton : boolean = false;
  amount! :product 
  ngOnInit(): void {

  }

  add(){
    this.item.emit({item: this.data, quantity: this.amount});

  }
}
