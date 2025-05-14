import { Component, OnInit } from '@angular/core';
import Swiper, { Autoplay, EffectFade, EffectFlip, Navigation } from "swiper";
// import * as AOS from 'aos';

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
        head: 'ADDING INNOVATION TO YOUR PACKAGING',
        about: 'Infuse your packaging with game-changing innovation, setting your brand apart.',
        img: 'assets/images/home/banner2.jpg',
        url: 'metalized-films',
      },
      {
        head: 'ELEVATING INNOVATION. ACCELERATING DELIVERY',
        about: 'Transforming packaging landscapes with pioneering solutions, delivered at lightning speed.',
        video: 'assets/images/home/banner1.mp4',
        url: 'bopet-films',
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

    this.swiper = new Swiper(".section1 .swiper-container", {
      slidesPerView: 1,
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },
      spaceBetween: 24,
      speed: 1000,
      navigation: {
        nextEl: ".section1 .swiper-button-next",
        prevEl: ".section1 .swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
      },
      loop: true,
    });

    this.swiper = new Swiper(".section3 .swiper-container", {
      slidesPerView: 'auto',
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },
      spaceBetween: 24,
      speed: 1000,
      navigation: {
        nextEl: ".section3 .swiper-button-next",
        prevEl: ".section3 .swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
      },
      loop: true,
    });

    this.swiper = new Swiper(".section4 .swiper-container", {
      slidesPerView: 'auto',
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },
      spaceBetween: 24,
      speed: 1000,
      navigation: {
        nextEl: ".section4 .swiper-button-next",
        prevEl: ".section4 .swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
      },
      loop: true,
    });
  }

}
