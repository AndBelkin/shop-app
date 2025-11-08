import type { ProductType } from "../types/globals";
import blackCoffeeImg from "../assets/black-coffee.jpg";
import cappuchinoImg from "../assets/cappuchino.jpg";
import latteImg from "../assets/latte.jpg";
import greenTeaImg from "../assets/green-tea.jpg";
import teaImg from "../assets/tea.jpg";
import rafImg from "../assets/raf.jpg";
import cocoaImg from "../assets/cocoa.jpg";
import espressoImg from "../assets/espresso.jpg";
import flatWhiteImg from "../assets/flat-white.jpg";
import hotChocolateImg from "../assets/hot-chocolate.jpg";

export const products: ProductType[] = [
  {
    id: 0,
    name: "Americano",
    desc: "Espresso-based black coffee with hot water added.",
    price: 2.75,
    img: blackCoffeeImg,
  },
  {
    id: 1,
    name: "Cappuchino",
    desc: "A classic espresso-based coffee drink with whipped milk.",
    price: 3.15,
    img: cappuchinoImg,
  },
  {
    id: 2,
    name: "Latte",
    desc: "Milk puff coffee. Whipped milk, rich espresso flavor.",
    price: 3.15,
    img: latteImg,
  },
  {
    id: 5,
    name: "Raf",
    desc: "For lovers of sweeter, espresso-based coffee with vanilla sugar/syrup, milk and delicate cream.",
    price: 3.35,
    img: rafImg,
  },
  {
    id: 6,
    name: "Flat White",
    desc: "A drink based on espresso and milk. Richer coffee flavor with a delicate, thin milk foam.",
    price: 3.35,
    img: flatWhiteImg,
  },
  {
    id: 7,
    name: "Espresso",
    desc: "Rich black coffee.",
    price: 3.35,
    img: espressoImg,
  },
  {
    id: 8,
    name: "Hot chocolate",
    desc: "A warming drink based on milk and dark chocolate.",
    price: 3.35,
    img: hotChocolateImg,
  },
  {
    id: 9,
    name: "Cocoa",
    desc: "A warming drink based on milk and milk chocolate. If desired, add cinnamon, whipped cream or marshmallows.",
    price: 3.35,
    img: cocoaImg,
  },
  {
    id: 3,
    name: "Black Tea",
    desc: "Classic black tea.",
    price: 2.25,
    img: teaImg,
  },
  {
    id: 4,
    name: "Green Tea",
    desc: "Classic green tea.",
    price: 2.35,
    img: greenTeaImg,
  },
];
