import type { ImageSourcePropType } from "react-native";

export type Shoe = {
  id: number;
  name: string;
  discount: number; // %
  price: number; // USD
  specs: string[];
  img: ImageSourcePropType;
};

export const SHOES: Shoe[] = [
  {
    id: 1,
    name: "Nike shoes",
    discount: 50,
    price: 100,
    specs: [
      "Sole: Rubber",
      "Closure: Lace-Up",
      "Shoe Width: Medium",
      "Lace Up",
      "Grip Rubber Sole",
      "Padded Insole",
    ],
    img: require("@/assets/shoes/1.png"),
  },
  {
    id: 2,
    name: "Adidas shoes",
    discount: 80,
    price: 120,
    specs: ["Lightweight", "Breathable Mesh", "Padded Insole"],
    img: require("@/assets/shoes/2.png"),
  },
  {
    id: 3,
    name: "Nike Bicycle",
    discount: 30,
    price: 90,
    specs: ["Outdoor", "Durable sole", "Everyday use"],
    img: require("@/assets/shoes/3.png"),
  },
  {
    id: 4,
    name: "Yonex shoes",
    discount: 50,
    price: 110,
    specs: ["Court Grip", "Toe Reinforcement", "Lace Up"],
    img: require("@/assets/shoes/4.png"),
  },
  {
    id: 5,
    name: "Victor shoes",
    discount: 50,
    price: 105,
    specs: ["Anti-slip", "Cushioned midsole", "Padded Insole"],
    img: require("@/assets/shoes/5.png"),
  },
  {
    id: 6,
    name: "Lining shoes",
    discount: 50,
    price: 98,
    specs: ["Breathable", "Rubber Sole", "Daily wear"],
    img: require("@/assets/shoes/6.png"),
  },
];
