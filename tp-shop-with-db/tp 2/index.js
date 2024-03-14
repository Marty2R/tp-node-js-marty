import Express from "express";
import shopRouter from "./routes/shop.js";
import authRouter from "./routes/auth.js";

const app = Express();

// Configure mon application pour qu'elle utlise ejs comme moteur de templating
// l'outil qui va generer de l'html
app.set("view engine", "ejs");
app.set("views", "views");

app.use(Express.static("src/public"));

app.get("/", (req, res) => {
  res.render("home", {});
});

app.use(shopRouter);

app.get("/panier", (req, res) => {
  res.render("panier", {});
});

app.use("/auth", authRouter);
app.use("/shop", shopRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
