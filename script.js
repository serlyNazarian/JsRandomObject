const ProductList = [
  {
    photo_url: "./imgs/product-1.jpg",
    name: "Coffee Maker",
    price: "$100",
    link: "Product-Page-3.html",
    rating: 1,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/product-2.jpg",
    name: "Female Dress",
    price: "$40",
    link: "",
    rating: 3,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/product-3.png",
    name: "ՍԵՂԱՆ",
    price: "$30",
    link: "",
    rating: 2,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/product-4.jpg",
    name: "item",
    price: "$5",
    link: "",
    rating: 4,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/product-5.png",
    name: "item",
    price: "$3",
    link: "",
    rating: 3,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/208619fb0492cbc3.jpg",
    name: "Gaming Mouse",
    price: "$100",
    link: "",
    rating: 5,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/20861a0d6eb641bd.jpg",
    name: "Gaming Mouse",
    price: "$20",
    link: "",
    rating: 1,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/5db97bda1d50b.jpg",
    name: "Headphones",
    price: "$45",
    link: "",
    rating: 5,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/2075fddceb45e6e5.jpg",
    name: "Camera",
    price: "$30",
    link: "",
    rating: 2,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/2065cf7ce9654cfe.jpg",
    name: "Sushi",
    price: "$1",
    link: "",
    rating: 3,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/5dcd433301e77.jpg",
    name: "Shoe",
    price: "$25",
    link: "",
    rating: 5,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/325db006d6096be.jpg",
    name: "Acer Laptop",
    price: "$500",
    link: "",
    rating: 4,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/206601d15b13db5e.jpeg",
    name: "Sushi",
    price: "$8.40",
    link: "",
    rating: 1,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/2065cf7b9b7bfe9f.jpg",
    name: "item",
    price: "$8.60",
    link: "",
    rating: 3,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/5ddbe4660f40b.jpg",
    name: "item",
    price: "$24.69$",
    link: "",
    rating: 2,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/1587836376967.jpg",
    name: "Samsung Phone",
    price: "$1000",
    link: "",
    rating: 1,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/83611ad5b5586ea.jpg",
    name: "Camera",
    price: "$500",
    link: "",
    rating: 4,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/208629764df58fd8.jpg",
    name: "MotherBoard",
    price: "$50",
    link: "",
    rating: 3,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/5ddbdcc6332ac.jpg",
    name: "Power Supply",
    price: "$14.60",
    link: "",
    rating: 5,
    Reviews: "(0 reviews)",
  },
  {
    photo_url: "./imgs/5ddbde8895996.jpg",
    name: "Watch",
    price: "$300",
    link: "",
    rating: 4,
    Reviews: "(0 reviews)",
  },
];

function getMultipleRandomObjects(ProductList, num) {
  const shuffled = [...ProductList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

let randomItem = getMultipleRandomObjects(ProductList, 4);
console.log(randomItem);

for (const spl of ProductList) {
    const SimilarStoreDiv = document.createElement("div");
    const SimilarStoreh4 = document.createElement("h4");
    const SimilarStoreh5 = document.createElement("h5");
    const SimilarStoreIcon = document.createElement("img");

    SimilarStoreIcon.src = spl.photo_url;
    SimilarStoreh4.innerHTML = spl.
}
