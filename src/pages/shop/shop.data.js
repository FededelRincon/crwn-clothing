//mi propio shopping data con las 8 categorias, listas

const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        // imageUrl: "/images/shop-img/hats/brown-brim.png",
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        // imageUrl: "/images/shop-img/hats/blue-beanie.png",
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        // imageUrl: "/images/shop-img/hats/brown-cowboy.png",
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        // imageUrl: "/images/shop-img/hats/grey-brim.png",
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        // imageUrl: "/images/shop-img/hats/green-beanie.png",
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        // imageUrl: "/images/shop-img/hats/palm-tree-cap.png",
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        // imageUrl: "/images/shop-img/hats/red-beanie.png",
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        // imageUrl: "/images/shop-img/hats/wolf-cap.png",
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        // imageUrl: "/images/shop-img/hats/blue-snapback.png",
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        // imageUrl: "/images/shop-img/sneakers/adidas-nmd.png", 
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        // imageUrl: "/images/shop-img/sneakers/yeezy.png",
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        // imageUrl: "/images/shop-img/sneakers/black-converse.png",
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        // imageUrl: "/images/shop-img/sneakers/white-nike-high-tops.png",
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        // imageUrl: "/images/shop-img/sneakers/nikes-red.png",
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        // imageUrl: "/images/shop-img/sneakers/nike-brown.png",
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        // imageUrl: "/images/shop-img/sneakers/nike-funky.png",
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        // imageUrl: "/images/shop-img/sneakers/timberlands.png",
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        // imageUrl: "/images/shop-img/jackets/black-shearling.png",
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        // imageUrl: "/images/shop-img/jackets/blue-jean-jacket.png",
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        // imageUrl: "/images/shop-img/jackets/grey-jean-jacket.png",
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        // imageUrl: "/images/shop-img/jackets/brown-shearling.png",
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        // imageUrl: "/images/shop-img/jackets/brown-trench.png",
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        // imageUrl: "/images/shop-img/womens/blue-tank.png",
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        // imageUrl: "/images/shop-img/womens/floral-blouse.png",
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        // imageUrl: "/images/shop-img/womens/floral-skirt.png",
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        // imageUrl: "/images/shop-img/womens/red-polka-dot-dress.png",
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        // imageUrl: "/images/shop-img/womens/striped-sweater.png",
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        // imageUrl: "/images/shop-img/womens/yellow-track-suit.png",
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        // imageUrl: "/images/shop-img/womens/white-vest.png",
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        // imageUrl: "/images/shop-img/mens/camo-vest.png",
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        // imageUrl: "/images/shop-img/mens/floral-shirt.png",
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        // imageUrl: "/images/shop-img/mens/long-sleeve.png",
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        // imageUrl: "/images/shop-img/mens/pink-shirt.png",
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        // imageUrl: "/images/shop-img/mens/roll-up-jean-shirt.png",
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        // imageUrl: "/images/shop-img/mens/polka-dot-shirt.png",
        price: 25
      }
    ]
  },
  {
    id: 6,
    title: 'Watches',
    routeName: 'watches',
    items: [
      {
        id: 36,
        name: 'Olevs Mens Minimalist',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61XwC26jdiL._UX679_.jpg',
        // imageUrl: "/images/shop-img/watches/OLEVS Mens Minimalist.jpg",
        price: 30
      },
      {
        id: 37,
        name: 'Golden Hour Sport',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71BmU7leKuL._UX679_.jpg',
        // imageUrl: "/images/shop-img/watches/Golden Hour Sport.jpg",
        price: 30
      },
      {
        id: 38,
        name: 'U.S. Polo',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91Ge0E3EeLL._UY679_.jpg',
        // imageUrl: "/images/shop-img/watches/U.S. Polo.jpg",
        price: 20
      },
      {
        id: 39,
        name: 'Fossil men casual',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81524nArHxL._UX679_.jpg',
        // imageUrl: "/images/shop-img/watches/Fossil men casual.jpg",
        price: 69
      },
      {
        id: 40,
        name: 'Burei Fashion',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71XXnINl6wL._UX679_.jpg',
        // imageUrl: "/images/shop-img/watches/BUREI Fashion.jpg",
        price: 26
      },
      {
        id: 41,
        name: 'Cuarzo Sport',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61VD2rzNhxL._UX679_.jpg',
        // imageUrl: "/images/shop-img/watches/Cuarzo Sport.jpg",
        price: 29
      },
      {
        id: 42,
        name: 'Timex Weekender Sport',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91B8QAQHiAL._UY741_.jpg',
        // imageUrl: "/images/shop-img/watches/Timex Weekender Sport.jpg",
        price: 45
      }
    ]
  },
  {
    id: 7,
    title: 'Glasses',
    routeName: 'glasses',
    items: [
      {
        id: 43,
        name: 'Kevingston Luton',
        imageUrl: 'https://dafitistaticar-a.akamaihd.net/p/kevingston-7602-731782-1-zoom.jpg',
        // imageUrl: "/images/shop-img/glasses/Kevingston Luton Negro.jpg",
        price: 40
      },
      {
        id: 44,
        name: 'Bross London',
        imageUrl: 'https://dafitistaticar-a.akamaihd.net/p/bross-9894-854225-1-zoom.jpg',
        // imageUrl: "/images/shop-img/glasses/Bross London Negro.jpg",
        price: 38
      },
      {
        id: 45,
        name: 'Kevingston V135 Pink',
        imageUrl: 'https://dafitistaticar-a.akamaihd.net/p/kevingston-2091-102225-1-zoom.jpg',
        // imageUrl: "/images/shop-img/glasses/Kevingston V135 Pink.jpg",
        price: 48
      },
      {
        id: 46,
        name: 'Prototype Adrien',
        imageUrl: 'https://dafitistaticar-a.akamaihd.net/p/prototype-1307-370915-1-zoom.jpg',
        // imageUrl: "/images/shop-img/glasses/Prototype Adrien.jpg",
        price: 55
      },
      {
        id: 47,
        name: 'Kevingston Ascot',
        imageUrl: 'https://dafitistaticar-a.akamaihd.net/p/kevingston-7615-711292-1-zoom.jpg',
        // imageUrl: "/images/shop-img/glasses/Kevingston Ascot.jpg",
        price: 49
      },
      {
        id: 48,
        name: 'Rusty Noiz',
        imageUrl: 'https://dafitistaticar-a.akamaihd.net/p/rusty-3296-882055-1-zoom.jpg',
        // imageUrl: "/images/shop-img/glasses/Rusty Noiz.jpg",
        price: 50
      },
      {
        id: 49,
        name: 'Rusty Fumzer',
        imageUrl: 'https://dafitistaticar-a.akamaihd.net/p/rusty-9153-432055-1-zoom.jpg',
        // imageUrl: "/images/shop-img/glasses/Rusty Fumzer.jpg",
        price: 48
      },
      {
        id: 50,
        name: 'Prototype Dylan',
        imageUrl: 'https://dafitistaticar-a.akamaihd.net/p/prototype-9206-119945-1-zoom.jpg',
        // imageUrl: "/images/shop-img/glasses/Prototype Dylan.jpg",
        price: 55
      }
    ]
  },
  {
    id: 8,
    title: 'Accesories',
    routeName: 'accesories',
    items: [
      {
        id: 51,
        name: 'collar metallic with ring',
        imageUrl: 'https://static.zara.net/photos///2020/I/0/2/p/2621/219/808/2/w/1371/2621219808_6_1_1.jpg?ts=1605518292159',
        // imageUrl: "/images/shop-img/accesories/collar metallic with ring.jpg",
        price: 23
      },
      {
        id: 52,
        name: 'Engraved metal ring',
        imageUrl: 'https://static.zara.net/photos///2020/I/0/2/p/2621/213/808/2/w/1371/2621213808_6_1_1.jpg?ts=1604923506287',
        // imageUrl: "/images/shop-img/accesories/Engraved metal ring.jpg",
        price: 18
      },
      {
        id: 53,
        name: 'Torsion metal ring',
        imageUrl: 'https://static.zara.net/photos///2020/I/0/2/p/2621/212/808/2/w/1371/2621212808_6_1_1.jpg?ts=1604923530302',
        // imageUrl: "/images/shop-img/accesories/Torsion metal ring.jpg",
        price: 18
      },
      {
        id: 54,
        name: 'Link metal ring',
        imageUrl: 'https://static.zara.net/photos///2020/I/0/1/p/2621/703/937/2/w/1371/2621703937_2_1_1.jpg?ts=1595244793043',
        // imageUrl: "/images/shop-img/accesories/Link metal ring.jpg",
        price: 20
      },
      {
        id: 55,
        name: 'Link golden ring',
        imageUrl: 'https://static.zara.net/photos///2020/I/0/2/p/2621/711/303/2/w/1371/2621711303_1_1_1.jpg?ts=1595522367720',
        // imageUrl: "/images/shop-img/accesories/Link golden ring.jpg",
        price: 23
      },
      {
        id: 56,
        name: 'Open knot metal bracelet',
        imageUrl: 'https://static.zara.net/photos///2020/I/0/2/p/2621/215/808/2/w/1371/2621215808_6_1_1.jpg?ts=1604923495761',
        // imageUrl: "/images/shop-img/accesories/Open knot metal bracelet.jpg",
        price: 23
      },
      {
        id: 57,
        name: 'Link metal bracelet',
        imageUrl: 'https://static.zara.net/photos///2020/I/0/1/p/2621/702/937/2/w/1371/2621702937_1_1_1.jpg?ts=1595244790054',
        // imageUrl: "/images/shop-img/accesories/Link metal bracelet.jpg",
        price: 18
      }
    ]
  }
];

export default SHOP_DATA;