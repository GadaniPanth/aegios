import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import Swiper, { Autoplay } from 'swiper';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.less"],
})
export class ProductsComponent implements OnInit {
  swiper!: Swiper;
  product: any;
  tableHeaders: any[] = [];
  haveTypeOf: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productDataService: ProductDataService,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get("product");
      const product = this.productDataService.getProductBySlug(slug);
      this.tableHeaders = [];
      this.haveTypeOf = false;

      if (product) {
        this.product = product;

        if (Object.keys(product.table[0])[0] == 'typeof') {
          this.tableHeaders.push('Type of film');
          this.haveTypeOf = true;
        }

        Object.keys(product.table[0]["rows"][0]).forEach((key) => {
          this.tableHeaders.push(key);
        });

        this.cdr.detectChanges();

        if (this.swiper) {
          this.swiper.destroy(true, true);
        }

        setTimeout(() => this.initSwiper(), 0);
      } else {
        this.router.navigate(["/"]);
      }
    });
  }

  ngAfterViewInit(): void { }

  private initSwiper() {
    Swiper.use([Autoplay]);
    this.swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 30,
      speed: 1000,
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      loop: true,
    });
  }
}
