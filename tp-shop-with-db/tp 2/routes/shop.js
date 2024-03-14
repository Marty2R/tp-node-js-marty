import express from "express";
import shopController, { getProducts } from "../controllers/shopController.js";

const router = express.Router();

router.get("/shop", getProducts);

export default router;
