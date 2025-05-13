import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChildren('counter') counters!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = +(el.getAttribute('data-target') || '0');
            let count = 0;
            const increment = target / 30;

            const updateCount = () => {
              count += increment;
              if (count < target) {
                el.childNodes[0].nodeValue = Math.ceil(count).toString();
                requestAnimationFrame(updateCount);
              } else {
                el.childNodes[0].nodeValue = target.toString();
              }
            };

            setTimeout(() => {
              updateCount();
              obs.unobserve(el);
            }, 1000)
          }
        });
      },
      { threshold: 0.1 }
    );

    this.counters.forEach(counter => {
      observer.observe(counter.nativeElement);
    });
  }
}
