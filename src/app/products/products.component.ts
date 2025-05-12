import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import Swiper, { Autoplay } from 'swiper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  swiper!: Swiper;
  product: any;
  tableHeaders: any[] = [];

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
      const tableLen: number = 0;

      if (product) {
        this.product = product;
        console.log(product.table[0]['rows']);
        console.log(product.table[0]['rows'][0]);
        console.log(product.table[0]['rows'][0]['category']);
        if (Object.keys(product.table[0])[0] == 'typeof') {
          // this.tableHeaders.push('Type of film')
        }
        Object.keys(product.table[0]['rows'][0]).forEach(key => {
          this.tableHeaders.push(key)
        })
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngAfterViewInit(): void {
    // Swiper.use([Navigation]);
    // Swiper.use([EffectFade]);
    // Swiper.use([EffectFlip]);
    Swiper.use([Autoplay]);

    this.swiper = new Swiper(".swiper-container", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      speed: 1000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2000,
      },
      loop: true,
    });
  }

}
