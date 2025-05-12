import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import Swiper, { Autoplay } from 'swiper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  swiper!: Swiper;
  product: any;
  tableHeaders: any[] = [];
  haveTypeOf: boolean = false;

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
      this.tableHeaders = []; // Reset to avoid accumulation
      this.haveTypeOf = false;

      if (product) {
        this.product = product;

        // Rebuild table headers
        if (Object.keys(product.table[0])[0] == 'typeof') {
          this.tableHeaders.push('Type of film');
          this.haveTypeOf = true;
        }

        Object.keys(product.table[0]['rows'][0]).forEach(key => {
          this.tableHeaders.push(key);
        });

        // You may also want to re-initialize Swiper here if needed
        setTimeout(() => this.initSwiper(), 0); // Wait for DOM
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngAfterViewInit(): void {
    // Moved swiper init to its own method
    this.initSwiper();
  }

  private initSwiper() {
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
