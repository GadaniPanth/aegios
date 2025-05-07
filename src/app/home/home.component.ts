import { Component, OnInit } from '@angular/core';
import Swiper, { Autoplay, EffectFade, EffectFlip, Navigation } from "swiper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  swiper!: Swiper;
  products: any;

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        head: 'ELEVATING INNOVATION. ACCELERATING DELIVERY',
        about: 'Transforming packaging landscapes with pioneering solutions, delivered at lightning speed.',
        video: 'assets/images/home/banner1.mp4',
        url: 'bopet-films',
      },
      {
        head: 'ADDING INNOVATION TO YOUR PACKAGING',
        about: 'Infuse your packaging with game-changing innovation, setting your brand apart.',
        img: 'assets/images/home/banner2.jpg',
        url: 'metalized-films',
      },
      {
        head: 'DELIVERING WORLD CLASS PACKAGING SOLUTIONS',
        about: 'Experience exceptional expertise and solutions that elevate your packaging to new heights',
        img: 'assets/images/home/banner3.jpg',
        url: 'bopp-films',
      }
    ]
  }

  ngAfterViewInit(): void {
    Swiper.use([Navigation]);
    // Swiper.use([EffectFade]);
    // Swiper.use([EffectFlip]);
    Swiper.use([Autoplay]);

    this.swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },
      spaceBetween: 24,
      speed: 1000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 10000,
      },
      loop: true,
    });
  }

}
