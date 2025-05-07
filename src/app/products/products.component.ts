import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productDataService: ProductDataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('product');
      const product = this.productDataService.getProductBySlug(slug);

      if (product) {
        this.product = product;
        this.location.replaceState(`/${slug}`);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

}
