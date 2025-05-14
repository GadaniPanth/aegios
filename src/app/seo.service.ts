// src/app/core/seo/seo.service.ts

import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private seoData: { [path: string]: { title: string; description: string; keywords: string } } = {
    '/': {
      title: 'Aegios - World-Class Packaging Film Solutions',
      description: "Discover high-quality packaging solutions at Aegios. We deliver innovative BOPET, BOPP, and metalized films to elevate your brand's packaging performance.",
      keywords: 'Aegios, packaging films, BOPET films, BOPP films, metalized films, sustainable packaging, innovative packaging',
    },
  };

  constructor(private title: Title, private meta: Meta) { }

  updateMetaTags(path: string) {
    const seo = this.seoData[path];
    if (!seo) return;

    const fullUrl = 'https://www.aegios.com' + path;
    const imageUrl = 'https://www.aegios.com//assets/images/aegios-opengraph.png';

    // Basic Meta Tags
    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ name: 'keywords', content: seo.keywords });

    // Open Graph Meta
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: fullUrl });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:locale', content: 'en_US' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Aegios' });

    // Twitter Card Meta
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
    this.meta.updateTag({ name: 'twitter:site', content: '@Aegios' });
    this.meta.updateTag({ name: 'twitter:creator', content: '@Aegios' });

    // Extra SEO
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Aegios' });

    this.setCanonicalURL(fullUrl);
  }

  private setCanonicalURL(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }
}
