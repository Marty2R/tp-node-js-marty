import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", { db });
});

const db = [
  {
    id: 1,
    img: "img/my_car.jpg",
    alt: "Image de seat Léon coupé",
    object: "Seat Léon SportCoupé",
    price: 17000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam odio inventore delectus accusamus in corporis veniam, commodi cum debitis.",
  },
  {
    id: 2,
    img: "img/my_car_ibiza.jpg",
    alt: "Image de seat ibiza",
    object: "Seat Ibiza Fr",
    price: 19000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam odio inventore delectus accusamus in corporis veniam, commodi cum debitis.",
  },
  {
    id: 3,
    img: "img/my_car_seat_ibiza.jpg",
    alt: "Seat ibiza SC",
    object: "Seat Ibiza 6j SC",
    price: 8000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam odio inventore delectus accusamus in corporis veniam, commodi cum debitis.",
  },
  {
    id: 3,
    img: "img/my_car_seat_ibiza-blue.jpg",
    alt: "Seat ibiza Copa Edition",
    object: "Seat Ibiza copa",
    price: 12000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam odio inventore delectus accusamus in corporis veniam, commodi cum debitis.",
  },
];

export default router;
