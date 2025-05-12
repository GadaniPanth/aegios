import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductDataService {
  private products = [
    {
      slug: "bopet-films",
      parent: "Products",
      name: "BOPET Films",
      mainImage: "assets/images/products/bopet-films/bopet-films.jpg",
      sec1Image: "assets/images/products/bopet-films/bopet-film1.png",
      sec1Text:
        "Our Biaxially-Oriented Polyethylene Terephthalate (BOPET) films offer exceptional clarity, stiffness, and chemical resistance, ensuring your products shine while staying protected. With easy processing and superior adhesion properties, these films are perfect for achieving optimal packaging performance.",
      sec2BgImage: "assets/images/products/bopet-films/bopet-inner-1.jpg",
      sec2Text: [
        "Crafted through a meticulous process of casting and stretching polyethylene terephthalate, these films have undergone an extraordinary transformation in both machine and cross directions. The smooth surface of BOPET films enhances their appeal, while their outstanding chemical and abrasion resistance ensure long-lasting durability. Choose from our range of in-line coated BOPET films, including co-polyester and acrylic options, to take your packaging to the next level.",
      ],
      sec4Icon: [
        "assets/images/products/bopet-films/feature1.png",
        "assets/images/products/bopet-films/feature2.png",
        "assets/images/products/bopet-films/feature3.png",
        "assets/images/products/bopet-films/feature4.png",
        "assets/images/products/bopet-films/feature5.png",
      ],
      sec4Text: [
        "Excellent tensile strength for industrial applications like hot stamping, yarn production and food & non-food grade application.",
        "Maintains MD shrinkage below 1% at 150°C, 30 min",
        "In-line coating system for enhanced ink anchorage and metal adhesion",
        "High barrier and high bond metallized films available",
        "Customizable optical density ranging from 0.25 to 4.0",
      ],
      sec5Image: [
        "assets/images/products/bopet-films/bopet-apln-1.jpg",
        "assets/images/products/bopet-films/bopet-apln-2.jpg",
        "assets/images/products/bopet-films/bopet-apln-3.jpg",
        "assets/images/products/bopet-films/bopet-apln-4.jpg",
        "assets/images/products/bopet-films/bopet-apln-5.jpg",
      ],
      sec5Text: [
        "Co polyester coated films",
        "Twist wrap grade",
        "Balance shrinkage",
        "Poly urethane coated film",
        "Melamine free acrylic coated film",
      ],
      table: [
        {
          Category: 'Plain and corona treated',
          Thickness: '8, 10, 12, 15, 23, 30, 36',
          Application: 'Packaging: Ideal for both food and non-food packaging needs. Printing and Lamination: Perfect for high-quality printing and laminating applications. Plasma Metallization: Suitable for plasma metallization processes. Industrial Applications: Used in insulation tapes and carton lamination, particularly compatible with solvent-based ink systems.'
        },
        {
          Category: 'Co-polyester coated',
          Thickness: '12, 15, 23, 30',
          Application: 'Dry Food and Confectionery Packaging: Ideal for packaging milk powder, tea, coffee, and powdered juices. Versatile for Various Products: Suitable for packaging less aggressive mediums such as shampoo, honey, liquor, oil, and more.'
        },
        {
          Category: 'Anti-static films and high slip',
          Thickness: '12, 15, 23, 30',
          Application: 'Electronic Packaging. ESD (Electrostatic Discharge) Bags: Utilized to create effective ESD bags, providing protection against static electricity and safeguarding sensitive electronic components. CMOS Packaging: CMOS (Complementary Metal-Oxide-Semiconductor) packaging, ensuring secure and reliable containment for these delicate electronic devices.'
        },
        {
          Category: 'Chemically coated film for hot fills retort',
          Thickness: '12, 15, 23, 30',
          Application: 'High-performance Applications. Pasteurization and Retort Processes: Providing exceptional heat resistance for both semi and full retort conditions. Metallized Version for Hot Fills: Ensuring excellent barrier properties and preserving the integrity of the packaged contents. Aseptic Packaging: Suitable for aggressive mediums, including beverages, sauces, and other challenging products, such as in Bag-in-Box (BIB) applications.'
        },
        {
          Category: 'Twist wrap grade',
          Thickness: '15, 18, 23',
          Application: 'Confectionery Industry. Chocolate Twist Wrap: Ensuring attractive presentation and secure wrapping. Lollipop Twist Wrap: Offering reliable sealing and protection while maintaining the visual appeal of the product.'
        },
        {
          Category: 'Yarn and stamping foil grade',
          Thickness: '12, 15, 23',
          Application: 'Textile Yarn: Providing strength and durability. Stamping Foil: Enabling the creation of intricate designs and patterns in industries like printing, labeling, and packaging.'
        },
        {
          Category: 'Release liner',
          Thickness: '12, 23, 36',
          Application: 'Excellent base material for silicone release liners, providing a smooth and reliable surface for the silicone coating.'
        },
        {
          Category: 'Ultra-clear',
          Thickness: '12, 23, 30, 36, 50, 75',
          Application: 'Printing: Offering a smooth surface and excellent ink adhesion for high-quality printing results. Labels: Providing durability and enhanced aesthetics to labels for various products and industries. Imaging: Utilized in imaging applications, such as medical imaging films or photographic prints, delivering exceptional clarity and image quality. Industrial Applications: Utility in numerous industrial applications, where reliability and performance are crucial.'
        },
        {
          Category: 'Balance shrinkage',
          Thickness: '8, 10, 12',
          Application: 'Extrusion Lamination: Providing a strong bond between different materials for composite structures. Coating: Offers improved properties such as enhanced ink adhesion, moisture resistance, and barrier properties.'
        },
        {
          Category: 'Isotropic',
          Thickness: '8, 10, 12',
          Application: 'Highly valued for their exceptional barrier properties, making them an ideal choice for lidding applications that require high barrier performance.'
        },
        {
          Category: 'Polyurethane coated film',
          Thickness: '12',
          Application: 'Recognized for their suitability in aseptic applications, particularly in the premium segments of Bag-in-Box (BIB) packaging.'
        },
        {
          Category: 'Melamine free acrylic coated film',
          Thickness: '8, 10, 12',
          Application: 'Specifically designed to withstand rigorous processing methods such as retort, pasteurization, and sterilization.'
        }
      ]
    },
    {
      slug: "metalized-films",
      parent: "Products",
      name: "Metalized Films",
      mainImage: "assets/images/products/metalized-films/metalize-films.jpg",
      sec1Image: "assets/images/products/metalized-films/metalize-film1.png",
      sec1Text:
        "We take immense pride in our diverse range of exclusive metalized films, meticulously manufactured using premium raw materials sourced from trusted vendors. Our films offer not only durability and superior quality but also deliver unrivaled performance.",
      sec2BgImage:
        "assets/images/products/metalized-films/metalized-inner-1.jpg",
      sec2Text: [
        "With a wide range of micron specifications and optical densities, our metalized films create an effective barrier against light, moisture, gases, and more. From flexible packaging and lamination to hot stamping foils and holograms, our metallized polyester films provide the perfect solution. Elevate your packaging with our exclusive metalized films, designed to captivate and protect your products.",
      ],
      sec4Icon: [
        "assets/images/products/metalized-films/feature1.png",
        "assets/images/products/metalized-films/feature2.png",
        "assets/images/products/metalized-films/feature3.png",
        "assets/images/products/metalized-films/feature4.png",
      ],
      sec4Text: [
        "Superior tensile strength for hot stamping and yarn applications.",
        "Low MD shrinkage (< 1%) at 150°C, ensuring dimensional stability.",
        "High barrier and strong bonding performance for secure packaging.",
        "Wide range of optical density options from 0.25 to 4.0.",
      ],
      sec5Image: [
        "assets/images/products/metalized-films/metaliz-apln-1.jpg",
        "assets/images/products/metalized-films/metaliz-apln-2.jpg",
        "assets/images/products/metalized-films/metaliz-apln-3.jpg",
        "assets/images/products/metalized-films/metaliz-apln-4.jpg",
        "assets/images/products/metalized-films/metaliz-apln-5.jpg",
        "assets/images/products/metalized-films/metaliz-apln-6.jpg",
      ],
      sec5Text: [
        "Non-heat sealable",
        "High bond (crack resistance)",
        "Film gradNormal barrier",
        "Normal packaging",
        "Low OD for ESD packaging",
        "Aseptic packaging",
      ],
      table: [
        ['Bottle grade', 'Specifically designed for the packaging of beverages, including carbonated drinks, mineral and drinking water, edible oil, liquor, and more.'],
        ['Bottle Textile grade', 'Ideal for the processing of polyester filament or yarn, such as POY and FDY. It is available in various finishes including Textile Semi Dull, Super Bright, Full Dull, Homo Bright, Textile Cationic Semi Dull, and Textile Cationic Bright.'],
        ['Film grade', 'Suitable for manufacturing of BOPET films. It is available in Film Bright and Film Silica variants, ensuring excellent performance in film production.'],
      ],
    },
    {
      slug: "polyester",
      parent: "Products",
      name: "Polyester (Resins & Chips)",
      mainImage: "assets/images/products/polyester/resin-banner.jpg",
      sec1Image: "assets/images/products/polyester/resin1.png",
      sec1Text:
        "At Aegios, we offer a wide range of premium Polyester Resins and Chips solutions tailored to meet diverse packaging needs. Our exclusive resins ensure a consistent supply for film manufacturing, bottles, and additives, catering to various industry applications.",
      sec2BgImage: "assets/images/products/polyester/resin-inner-1.png",
      sec2Text: [
        "Our bottle grade polyester chips are the ideal choice for beverages packaging, guaranteeing exceptional quality for carbonated drinks, mineral water, edible oil, and more. Our specialized additive chips, optimizes the processing of various packaging products for improved performance and functionality.",
        " With our film grade polyester chips, available in super bright and additive (silica) varieties, you can achieve superior film manufacturing. These chips provide excellent clarity and precise specifications, ensuring the production of films with outstanding quality, visual appeal, and durability. ",
      ],
      sec4Icon: [
        "assets/images/products/polyester/feature1.png",
        "assets/images/products/polyester/feature2.png",
        "assets/images/products/polyester/feature3.png",
        "assets/images/products/polyester/feature4.png",
      ],
      sec4Text: [
        "The Polyester Resins and Chips are produced using direct esterification and continuous poly-condensation technology, ensuring high quality and performance.",
        "The production capacity for our Polyester Resins and Chips is 90,000 tons per annum, enabling us to meet large-scale demands effectively.",
        "Specialty chips, including silica and cationic variants, provide unique properties and cater to specific application requirements.",
        "Designed to accommodate multi-grade production, allowing for the manufacturing of different grades of polyester resins and chips in a single line, providing versatility and flexibility.",
      ],
      sec5Image: [
        "assets/images/products/polyester/resin-apln-1.jpg",
        "assets/images/products/polyester/resin-apln-2.jpg",
        "assets/images/products/polyester/resin-apln-3.jpg",
        "assets/images/products/polyester/resin-apln-4.jpg",
      ],
      sec5Text: [
        "Bottle grade",
        "Textile grade",
        "Film grade",
        "Polyester Resins and Chips",
      ],
      table: [
        ['Bottle grade', 'Specifically designed for the packaging of beverages, including carbonated drinks, mineral and drinking water, edible oil, liquor, and more.'],
        ['Bottle Textile grade', 'Ideal for the processing of polyester filament or yarn, such as POY and FDY. It is available in various finishes including Textile Semi Dull, Super Bright, Full Dull, Homo Bright, Textile Cationic Semi Dull, and Textile Cationic Bright.'],
        ['Film grade', 'Suitable for manufacturing of BOPET films. It is available in Film Bright and Film Silica variants, ensuring excellent performance in film production.'],
      ],
    },
    {
      slug: 'bopp-films',
      parent: 'Products',
      name: 'BOPP Films',
      mainImage: 'assets/images/products/bopp/bopp-film.jpg',
      sec1Image: 'assets/images/products/polyester/resin1.png',
      sec1Text: 'BOPP films (Biaxially Oriented PolyPropylene Films) are a game-changer in the packaging industry. With excellent moisture barrier properties and high clarity, BOPP films are the preferred choice for food packaging worldwide. They extend the shelf life of products, reducing food waste, and maintain consistent seal integrity, ensuring product quality and freshness.',
      sec2BgImage: 'assets/images/products/polyester/resin-inner-1.png',
      sec2Text: ['BOPP films contribute to sustainability efforts with their low carbon footprint and recyclability. These films offer endless possibilities for aesthetic appeal, with options for transparent, white opaque, and metallized variants, allowing for eye-catching graphics and attractive packaging. Benefit from the unique density advantage of BOPP films, ensuring more yield and lighter rolls for efficient handling.',],
      sec4Icon: ['assets/images/products/polyester/feature1.png', 'assets/images/products/polyester/feature2.png', 'assets/images/products/polyester/feature3.png'],
      sec4Text: ['Label Grade Films produced from 5-Layers BOPP offer varying gloss and density options, impacting yield. They also provide high heat seal strength (> 1000 gm/25mm) for secure packaging and superior label performance.', 'Advanced Hi-Res metallising machines ensure uniform aluminum deposition on film substrates, resulting in consistent barrier properties and enhanced packaging performance.', 'Metallized OPP films offer optical density options ranging from 1.8 to 3.0, allowing you to achieve the desired level of opacity and visual impact for your specific applications.'],
      sec5Image: ['assets/images/products/polyester/resin-apln-1.jpg', 'assets/images/products/polyester/resin-apln-2.jpg', 'assets/images/products/polyester/resin-apln-3.jpg', 'assets/images/products/polyester/resin-apln-4.jpg', 'assets/images/products/polyester/resin-apln-5.jpg', 'assets/images/products/polyester/resin-apln-6.jpg'],
      sec5Text: ['Transparent non heat sealable', 'Matallizable', 'Metallizable heat sealable', 'Labels (transparent & pearlized)', 'Overwrap (transparent & white opaque)', 'White opaque (solid)'],
      table: [
        {
          Category: 'Transparent non heat sealable',
          Thickness: '9, 10, 12, 15, 18, 20, 25, 30',
          Application: 'Ideal for reverse printing, lamination, and conversion processes, offering versatility and excellent print quality.'
        },
        {
          Category: 'Transparent non heat sealable',
          Thickness: '15, 18, 20, 25, 30, 35, 40, 50',
          Application: 'Well-suited for single/two-ply printing, lamination, inner wrapping of confectionery products, and the production of bags and pouches.'
        },
        {
          Category: 'Matallizable',
          Thickness: '9, 10, 12, 15, 18, 20, 25',
          Application: 'Reliable base film for aluminum metallization, enabling decorative applications and sandwich lamination in various industries.'
        },
        {
          Category: 'Metallizable heat sealable',
          Thickness: '15, 18, 20, 25, 30, 40',
          Application: 'Specifically designed base films for aluminum vacuum metallization, these films facilitate higher speed filling and sealing (FFS) machine operations.'
        },
        {
          Category: 'White opaque (solid)',
          Thickness: '15, 18, 20, 25, 30, 35, 40',
          Application: 'Provides exceptional single/two ply printing and lamination properties, ensuring attractive packaging solutions for confectionery products.'
        },
        {
          Category: 'White pearlized (cavitated)',
          Thickness: '25, 30, 35, 40, 45',
          Application: 'Single/two-ply printing, lamination, and confectionery packaging, making them well-suited for high-speed packaging applications.'
        },
        {
          Category: 'Matte',
          Thickness: '12, 13, 15, 18, 20, 25, 30',
          Application: 'Suitable for reverse printing, lamination, and conversion processes, offering versatility and compatibility with various conversion techniques.'
        },
        {
          Category: 'Labels (transparent & pearlized)',
          Thickness: '15, 18, 20, 25, 30, 35, 40, 45',
          Application: 'Ideal for high-speed label machines, enabling efficient and precise application in wrap-around, roll fed, and pressure-sensitive label formats.'
        },
        {
          Category: 'Overwrap (transparent & white opaque)',
          Thickness: '18, 20, 25, 30',
          Application: 'Excellent for high-speed bundle overwrapping applications, providing reliable packaging solutions for CD/cassette/paperboard boxes.'
        },
        {
          Category: 'Flower overwrap',
          Thickness: '15, 18, 21, 23, 25, 37, 45, 50',
          Application: 'Flower overwrapping, conversion processes, textile bag production, adhesive tape manufacturing, and photo album applications.'
        },
        {
          Category: 'Release film',
          Thickness: '12, 15, 18, 20, 25, 30',
          Application: 'Effective release film for plywood and decorative lamination, ensuring smooth and efficient production processes.'
        },
        {
          Category: 'Adhesive tapes & textile grade',
          Thickness: '21, 23, 25, 37, 45, 50',
          Application: 'Suitable for pressure-sensitive adhesive tape manufacturing and textile bag production, offering excellent performance and durability.'
        },
        {
          Category: 'Antifog',
          Thickness: '25, 30, 35, 40, 45',
          Application: 'Cold antifog applications for fresh vegetables, fruits, bread, meat, and other food products, maintaining clarity and preventing fogging.'
        },
        {
          Category: 'Base film for Thermal lamination',
          Thickness: '25, 30, 35, 40, 45',
          Application: 'Cold fog packaging for fresh vegetables, fruits, bread, meat, and other food products, providing reliable packaging solutions.'
        },
        {
          Category: 'Base film for Silicone coating',
          Thickness: '18, 20, 25, 30, 35, 40, 45, 50',
          Application: 'Serves as an ideal base film for silicone coating, enabling the production of high-quality release liners for various applications.'
        },
        {
          Category: 'Antiskid',
          Thickness: '15, 18, 20, 25',
          Application: 'Offers antiskid properties with high coefficient of friction (COF), ensuring stability and secure packaging for various products.'
        },
        {
          Category: 'Cold seal',
          Thickness: '10, 12, 15, 18, 20, 25',
          Application: 'Reverse printing, lamination, and as a release layer in cold seal lamination processes, ensuring efficient and reliable packaging solutions.'
        },
        {
          Category: 'Oxo-biodegradable (transparent & metallized)',
          Thickness: '18, 20, 25',
          Application: 'Well-suited for printing, lamination, and conversion processes, delivering versatility and excellent performance in various applications.'
        }
      ],
    },
    {
      slug: 'bopp-films',
      parent: 'Products',
      name: 'BOPP Films',
      mainImage: 'assets/images/products/bopp/bopp-film.jpg',
      sec1Image: 'assets/images/products/polyester/resin1.png',
      sec1Text: 'BOPP films (Biaxially Oriented PolyPropylene Films) are a game-changer in the packaging industry. With excellent moisture barrier properties and high clarity, BOPP films are the preferred choice for food packaging worldwide. They extend the shelf life of products, reducing food waste, and maintain consistent seal integrity, ensuring product quality and freshness.',
      sec2BgImage: 'assets/images/products/polyester/resin-inner-1.png',
      sec2Text: ['BOPP films contribute to sustainability efforts with their low carbon footprint and recyclability. These films offer endless possibilities for aesthetic appeal, with options for transparent, white opaque, and metallized variants, allowing for eye-catching graphics and attractive packaging. Benefit from the unique density advantage of BOPP films, ensuring more yield and lighter rolls for efficient handling.',],
      sec4Icon: ['assets/images/products/polyester/feature1.png', 'assets/images/products/polyester/feature2.png', 'assets/images/products/polyester/feature3.png'],
      sec4Text: ['Label Grade Films produced from 5-Layers BOPP offer varying gloss and density options, impacting yield. They also provide high heat seal strength (> 1000 gm/25mm) for secure packaging and superior label performance.', 'Advanced Hi-Res metallising machines ensure uniform aluminum deposition on film substrates, resulting in consistent barrier properties and enhanced packaging performance.', 'Metallized OPP films offer optical density options ranging from 1.8 to 3.0, allowing you to achieve the desired level of opacity and visual impact for your specific applications.'],
      sec5Image: ['assets/images/products/polyester/resin-apln-1.jpg', 'assets/images/products/polyester/resin-apln-2.jpg', 'assets/images/products/polyester/resin-apln-3.jpg', 'assets/images/products/polyester/resin-apln-4.jpg', 'assets/images/products/polyester/resin-apln-5.jpg', 'assets/images/products/polyester/resin-apln-6.jpg'],
      sec5Text: ['Transparent non heat sealable', 'Matallizable', 'Metallizable heat sealable', 'Labels (transparent & pearlized)', 'Overwrap (transparent & white opaque)', 'White opaque (solid)'],
      table: [
        {
          Category: 'Transparent non heat sealable',
          Thickness: '9, 10, 12, 15, 18, 20, 25, 30',
          Application: 'Ideal for reverse printing, lamination, and conversion processes, offering versatility and excellent print quality.'
        },
        {
          Category: 'Transparent non heat sealable',
          Thickness: '15, 18, 20, 25, 30, 35, 40, 50',
          Application: 'Well-suited for single/two-ply printing, lamination, inner wrapping of confectionery products, and the production of bags and pouches.'
        },
        {
          Category: 'Matallizable',
          Thickness: '9, 10, 12, 15, 18, 20, 25',
          Application: 'Reliable base film for aluminum metallization, enabling decorative applications and sandwich lamination in various industries.'
        },
        {
          Category: 'Metallizable heat sealable',
          Thickness: '15, 18, 20, 25, 30, 40',
          Application: 'Specifically designed base films for aluminum vacuum metallization, these films facilitate higher speed filling and sealing (FFS) machine operations.'
        },
        {
          Category: 'White opaque (solid)',
          Thickness: '15, 18, 20, 25, 30, 35, 40',
          Application: 'Provides exceptional single/two ply printing and lamination properties, ensuring attractive packaging solutions for confectionery products.'
        },
        {
          Category: 'White pearlized (cavitated)',
          Thickness: '25, 30, 35, 40, 45',
          Application: 'Single/two-ply printing, lamination, and confectionery packaging, making them well-suited for high-speed packaging applications.'
        },
        {
          Category: 'Matte',
          Thickness: '12, 13, 15, 18, 20, 25, 30',
          Application: 'Suitable for reverse printing, lamination, and conversion processes, offering versatility and compatibility with various conversion techniques.'
        },
        {
          Category: 'Labels (transparent & pearlized)',
          Thickness: '15, 18, 20, 25, 30, 35, 40, 45',
          Application: 'Ideal for high-speed label machines, enabling efficient and precise application in wrap-around, roll fed, and pressure-sensitive label formats.'
        },
        {
          Category: 'Overwrap (transparent & white opaque)',
          Thickness: '18, 20, 25, 30',
          Application: 'Excellent for high-speed bundle overwrapping applications, providing reliable packaging solutions for CD/cassette/paperboard boxes.'
        },
        {
          Category: 'Flower overwrap',
          Thickness: '15, 18, 21, 23, 25, 37, 45, 50',
          Application: 'Flower overwrapping, conversion processes, textile bag production, adhesive tape manufacturing, and photo album applications.'
        },
        {
          Category: 'Release film',
          Thickness: '12, 15, 18, 20, 25, 30',
          Application: 'Effective release film for plywood and decorative lamination, ensuring smooth and efficient production processes.'
        },
        {
          Category: 'Adhesive tapes & textile grade',
          Thickness: '21, 23, 25, 37, 45, 50',
          Application: 'Suitable for pressure-sensitive adhesive tape manufacturing and textile bag production, offering excellent performance and durability.'
        },
        {
          Category: 'Antifog',
          Thickness: '25, 30, 35, 40, 45',
          Application: 'Cold antifog applications for fresh vegetables, fruits, bread, meat, and other food products, maintaining clarity and preventing fogging.'
        },
        {
          Category: 'Base film for Thermal lamination',
          Thickness: '25, 30, 35, 40, 45',
          Application: 'Cold fog packaging for fresh vegetables, fruits, bread, meat, and other food products, providing reliable packaging solutions.'
        },
        {
          Category: 'Base film for Silicone coating',
          Thickness: '18, 20, 25, 30, 35, 40, 45, 50',
          Application: 'Serves as an ideal base film for silicone coating, enabling the production of high-quality release liners for various applications.'
        },
        {
          Category: 'Antiskid',
          Thickness: '15, 18, 20, 25',
          Application: 'Offers antiskid properties with high coefficient of friction (COF), ensuring stability and secure packaging for various products.'
        },
        {
          Category: 'Cold seal',
          Thickness: '10, 12, 15, 18, 20, 25',
          Application: 'Reverse printing, lamination, and as a release layer in cold seal lamination processes, ensuring efficient and reliable packaging solutions.'
        },
        {
          Category: 'Oxo-biodegradable (transparent & metallized)',
          Thickness: '18, 20, 25',
          Application: 'Well-suited for printing, lamination, and conversion processes, delivering versatility and excellent performance in various applications.'
        }
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
    return this.products.find((p) => p.slug === slug);
  }

  isValidSlug(slug: string) {
    return this.products.some((p) => p.slug === slug);
  }
}
