import { Color } from "../types/color";
import { Phone } from "../types/phone";

export const phoneColors: Color[] = [
  {
    id: "light-blue",
    name: "Xanh nhạt",
    color: "#87CEEB",
    image: require("../imgs/blue.png"),
  },
  {
    id: "red",
    name: "Đỏ",
    color: "#DC143C",
    image: require("../imgs/red.png"),
  },
  {
    id: "black",
    name: "Đen",
    color: "#000000",
    image: require("../imgs/black.png"),
  },
  {
    id: "blue",
    name: "Xanh dương",
    color: "#1E3A8A",
    image: require("../imgs/blue.png"),
  },
];

export const phoneData: Phone = {
  name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
  rating: 5,
  reviews: "Xem 829 đánh giá",
  price: "1.790.000 đ",
  originalPrice: "1.790.000 đ",
  discount: "Ở đâu rẻ hơn hoàn tiền",
};
