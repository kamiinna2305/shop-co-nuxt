export default defineEventHandler(() => {
  return {
    newArrivals: [
      { 
        id: 1, 
        name: "T-shirt with Tape Details", 
        price: 120, 
        description: "This graphic t-shirt is perfect for any occasion. Crafted from a premium cotton fabric, it offers unsurpassed comfort and style.",
        rating: 4.5, 
        "images": [
                   "/img/01-1.png",
                   "/img/01-2.png",
                   "/img/01.png"
                  ],
        img: "/img/01.png",
        category: "T-shirts",
        colors: [
          { name: 'White', hex: '#FFFFFF' },
          { name: 'Black', hex: '#000000' }
        ],
        sizes: ["Medium", "Large"]
      },
      { 
        id: 2, 
        name: "Skinny Fit Jeans", 
        price: 240, 
        description: "This graphic t-shirt is perfect for any occasion. Crafted from a premium cotton fabric, it offers unsurpassed comfort and style.",
        oldPrice: 260, 
        rating: 3.5, 
        "images": [
                    "/img/02.png",
                    "/img/02.png",
                    "/img/02.png"
                  ],
        img: "/img/02.png",
        category: "Jeans",
        colors: [
          { name: 'Blue', hex: '#31344F' }
        ],
        sizes: ["X-Small", "Small", "Medium"]
      },
      { 
        id: 3, 
        name: "Checkered Shirt", 
        price: 180, 
        description: "This graphic t-shirt is perfect for any occasion.",
        rating: 4.5, 
        "images": [
                   "/img/03.png",
                   "/img/03.png",
                   "/img/03.png"
                  ],
        img: "/img/03.png",
        category: "Shirts",
        colors: [
          { name: 'White', hex: '#FFFFFF' },
          { name: 'Red', hex: '#e20000' }
        ],
        sizes: ["Medium", "Large", "X-Large"]
      },
      { 
        id: 4, 
        name: "Sleeve Striped T-shirt", 
        price: 130, 
        description: "This graphic t-shirt is perfect for any occasion. Crafted from a premium cotton fabric, it offers unsurpassed comfort and style.",
        oldPrice: 160, 
        rating: 4.5, 
        "images": [
                   "/img/04.png",
                   "/img/04.png",
                   "/img/04.png"
                  ],
        img: "/img/04.png",
        category: "T-shirts",
        colors: [
          { name: 'White', hex: '#FFFFFF' },
          { name: 'Black', hex: '#000000' },
          { name: 'Yellow', hex: '#fedd05' }
        ],
        sizes: ["Small", "Medium"]
      }
    ],
    topSelling: [
      { 
        id: 5, 
        name: "Vertical Striped Shirt", 
        price: 100, 
        description: "This graphic t-shirt is perfect for any occasion. Crafted from a premium cotton fabric, it offers unsurpassed comfort and style.",
        oldPrice: 232, 
        rating: 5.0, 
        "images": [
                   "/img/05.png",
                   "/img/05.png",
                   "/img/05.png"
                  ],
        img: "/img/05.png",
        category: "Shirts",
         colors: [
          { name: 'White', hex: '#FFFFFF' },
          { name: 'Green', hex: '#00e20f' }
        ],
        sizes: ["Large", "X-Large"]
      },
      { 
        id: 6, 
        name: "Courage Graphic T-shirt", 
        price: 145, 
        description: "This graphic t-shirt is perfect for any occasion. Crafted from a premium cotton fabric, it offers unsurpassed comfort and style.",
        rating: 4.0, 
        "images": [
                   "/img/06.png",
                   "/img/06.png",
                   "/img/06.png"
                  ],
        img: "/img/06.png",
        category: "T-shirts",
         colors: [
          { name: 'White', hex: '#FFFFFF' },
          { name: 'Black', hex: '#000000' }
        ],
        sizes: ["Medium"]
      },
      { 
        id: 7, 
        name: "Loose Fit Bermuda Shorts", 
        price: 80, 
        description: "This graphic t-shirt is perfect for any occasion. Crafted from a premium cotton fabric, it offers unsurpassed comfort and style.",
        rating: 3.0, 
        "images": [
                   "/img/07.png",
                   "/img/07.png",
                   "/img/07.png"
                  ],
        img: "/img/07.png",
        category: "Shorts",
        colors: [
          { name: 'Yellow', hex: '#fcf009' },
          { name: 'Green', hex: '#00e20f' }
        ],
        sizes: ["Small", "Medium", "Large"]
      },
      { 
        id: 8, 
        name: "Faded Skinny Jeans", 
        price: 210, 
        description: "This graphic t-shirt is perfect for any occasion. Crafted from a premium cotton fabric, it offers unsurpassed comfort and style.",
        rating: 4.5, 
        "images": [
                   "/img/08.png",
                   "/img/08.png",
                   "/img/08.png"
                  ],
        img: "/img/08.png",
        category: "Jeans",
        colors: [
          { name: 'Blue', hex: '#035bf4' },
          { name: 'Black', hex: '#000000' }
        ],
        sizes: ["Large", "X-Large"]
      }
    ]
  }
})