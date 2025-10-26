import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProuductsService } from '../../services/all-prouducts.service';

@Component({
  selector: 'app-products-details',
  standalone: false,
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  id!: any;
  data: any;
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private service: AllProuductsService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getproduct();
  }
  getproduct() {
    this.loading = true;
    this.service.getsingleproduct(this.id).subscribe(
      (res) => {
        this.loading = false;
        this.data = res;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }
}
