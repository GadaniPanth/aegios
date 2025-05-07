import { Injectable } from '@angular/core';
import { table } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private products = [
    {
      slug: 'bopet-films',
      parent: 'Products',
      name: 'BOPET FILMS',
      mainImage: 'assets/images/products/bopet-films/bopet-films.jpg',
      sec1Image: 'assets/images/products/bopet-films/bopet-film1.png',
      sec1Text: 'Our Biaxially-Oriented Polyethylene Terephthalate (BOPET) films offer exceptional clarity, stiffness, and chemical resistance, ensuring your products shine while staying protected. With easy processing and superior adhesion properties, these films are perfect for achieving optimal packaging performance.',
      sec2BgImage: 'assets/images/products/bopet-films/bopet-inner-1.jpg',
      sec2Text: ['Crafted through a meticulous process of casting and stretching polyethylene terephthalate, these films have undergone an extraordinary transformation in both machine and cross directions. The smooth surface of BOPET films enhances their appeal, while their outstanding chemical and abrasion resistance ensure long-lasting durability. Choose from our range of in-line coated BOPET films, including co-polyester and acrylic options, to take your packaging to the next level.'],
      sec4Icon: ['assets/images/products/polyester/feature-resin1.png', 'assets/images/products/polyester/feature-resin1.png', 'assets/images/products/polyester/feature-resin2.png', 'assets/images/products/polyester/feature-resin3.png', 'assets/images/products/polyester/feature-resin4.png'],
      sec4Text: ['The Polyester Resins and Chips are produced using direct esterification and continuous poly-condensation technology, ensuring high quality and performance.', 'The Polyester Resins and Chips are produced using direct esterification and continuous poly-condensation technology, ensuring high quality and performance.', 'The production capacity for our Polyester Resins and Chips is 90,000 tons per annum, enabling us to meet large-scale demands effectively.', 'Specialty chips, including silica and cationic variants, provide unique properties and cater to specific application requirements.', 'Designed to accommodate multi-grade production, allowing for the manufacturing of different grades of polyester resins and chips in a single line, providing versatility and flexibility.'],
      sec5Image: ['assets/images/products/polyester/resin-apln-1.jpg', 'assets/images/products/polyester/resin-apln-2.jpg', 'assets/images/products/polyester/resin-apln-3.jpg', 'assets/images/products/polyester/resin-apln-4.jpg'],
      sec5Text: ['Bottle grade', 'Textile grade', 'Film grade', 'Polyester Resins and Chips'],
      table: [
        ['Bottle grade', 'Specifically designed for the packaging of beverages, including carbonated drinks, mineral and drinking water, edible oil, liquor, and more.'],
        ['Bottle Textile grade', 'Ideal for the processing of polyester filament or yarn, such as POY and FDY. It is available in various finishes including Textile Semi Dull, Super Bright, Full Dull, Homo Bright, Textile Cationic Semi Dull, and Textile Cationic Bright.'],
        ['Film grade', 'Suitable for manufacturing of BOPET films. It is available in Film Bright and Film Silica variants, ensuring excellent performance in film production.'],
      ],
    },
    {
      slug: 'metalized-films',
      parent: 'Products',
      name: 'Metalized Films',
      mainImage: 'assets/images/products/metalized-films/metalize-films.jpg',
      sec1Image: 'assets/images/products/metalized-films/metalize-film1.png',
      sec1Text: 'We take immense pride in our diverse range of exclusive metalized films, meticulously manufactured using premium raw materials sourced from trusted vendors. Our films offer not only durability and superior quality but also deliver unrivaled performance.',
      sec2BgImage: 'assets/images/products/metalized-films/metalized-inner-1.jpg',
      sec2Text: ['With a wide range of micron specifications and optical densities, our metalized films create an effective barrier against light, moisture, gases, and more. From flexible packaging and lamination to hot stamping foils and holograms, our metallized polyester films provide the perfect solution. Elevate your packaging with our exclusive metalized films, designed to captivate and protect your products.'],
      sec4Icon: ['assets/images/products/polyester/feature-resin1.png', 'assets/images/products/polyester/feature-resin2.png', 'assets/images/products/polyester/feature-resin3.png', 'assets/images/products/polyester/feature-resin4.png'],
      sec4Text: ['The Polyester Resins and Chips are produced using direct esterification and continuous poly-condensation technology, ensuring high quality and performance.', 'The production capacity for our Polyester Resins and Chips is 90,000 tons per annum, enabling us to meet large-scale demands effectively.', 'Specialty chips, including silica and cationic variants, provide unique properties and cater to specific application requirements.', 'Designed to accommodate multi-grade production, allowing for the manufacturing of different grades of polyester resins and chips in a single line, providing versatility and flexibility.'],
      sec5Image: ['assets/images/products/polyester/resin-apln-1.jpg', 'assets/images/products/polyester/resin-apln-2.jpg', 'assets/images/products/polyester/resin-apln-3.jpg', 'assets/images/products/polyester/resin-apln-4.jpg'],
      sec5Text: ['Bottle grade', 'Textile grade', 'Film grade', 'Polyester Resins and Chips'],
      table: [
        ['Bottle grade', 'Specifically designed for the packaging of beverages, including carbonated drinks, mineral and drinking water, edible oil, liquor, and more.'],
        ['Bottle Textile grade', 'Ideal for the processing of polyester filament or yarn, such as POY and FDY. It is available in various finishes including Textile Semi Dull, Super Bright, Full Dull, Homo Bright, Textile Cationic Semi Dull, and Textile Cationic Bright.'],
        ['Film grade', 'Suitable for manufacturing of BOPET films. It is available in Film Bright and Film Silica variants, ensuring excellent performance in film production.'],
      ],
    },
    {
      slug: 'polyester',
      parent: 'Products',
      name: 'Polyester (Resins & Chips)',
      mainImage: 'assets/images/products/polyester/resin-banner.jpg',
      sec1Image: 'assets/images/products/polyester/resin1.png',
      sec1Text: 'At Aegios, we offer a wide range of premium Polyester Resins and Chips solutions tailored to meet diverse packaging needs. Our exclusive resins ensure a consistent supply for film manufacturing, bottles, and additives, catering to various industry applications.',
      sec2BgImage: 'assets/images/products/polyester/resin-inner-1.png',
      sec2Text: ['Our bottle grade polyester chips are the ideal choice for beverages packaging, guaranteeing exceptional quality for carbonated drinks, mineral water, edible oil, and more. Our specialized additive chips, optimizes the processing of various packaging products for improved performance and functionality.', ' With our film grade polyester chips, available in super bright and additive (silica) varieties, you can achieve superior film manufacturing. These chips provide excellent clarity and precise specifications, ensuring the production of films with outstanding quality, visual appeal, and durability. ',],
      sec4Icon: ['assets/images/products/polyester/feature-resin1.png', 'assets/images/products/polyester/feature-resin2.png', 'assets/images/products/polyester/feature-resin3.png', 'assets/images/products/polyester/feature-resin4.png'],
      sec4Text: ['The Polyester Resins and Chips are produced using direct esterification and continuous poly-condensation technology, ensuring high quality and performance.', 'The production capacity for our Polyester Resins and Chips is 90,000 tons per annum, enabling us to meet large-scale demands effectively.', 'Specialty chips, including silica and cationic variants, provide unique properties and cater to specific application requirements.', 'Designed to accommodate multi-grade production, allowing for the manufacturing of different grades of polyester resins and chips in a single line, providing versatility and flexibility.'],
      sec5Image: ['assets/images/products/polyester/resin-apln-1.jpg', 'assets/images/products/polyester/resin-apln-2.jpg', 'assets/images/products/polyester/resin-apln-3.jpg', 'assets/images/products/polyester/resin-apln-4.jpg'],
      sec5Text: ['Bottle grade', 'Textile grade', 'Film grade', 'Polyester Resins and Chips'],
      table: [
        ['Bottle grade', 'Specifically designed for the packaging of beverages, including carbonated drinks, mineral and drinking water, edible oil, liquor, and more.'],
        ['Bottle Textile grade', 'Ideal for the processing of polyester filament or yarn, such as POY and FDY. It is available in various finishes including Textile Semi Dull, Super Bright, Full Dull, Homo Bright, Textile Cationic Semi Dull, and Textile Cationic Bright.'],
        ['Film grade', 'Suitable for manufacturing of BOPET films. It is available in Film Bright and Film Silica variants, ensuring excellent performance in film production.'],
      ],
    },
    // {
    //   slug: 'bopp-films',
    //   name: 'BOPP Films',
    //   description: 'Coming Soon...',
    //   image: 'assets/images/products/bopp-films/bopp.jpg'
    // }
  ];

  getAllProducts() {
    return this.products;
  }

  getProductBySlug(slug: string) {
    return this.products.find(p => p.slug === slug);
  }

  isValidSlug(slug: string) {
    return this.products.some(p => p.slug === slug);
  }
}
