import express from "express";

const router = express.Router();

router.get("/sign-in", (req, res) => {
  res.render("sign-in", {});
});

export default router;
