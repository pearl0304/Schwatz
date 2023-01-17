// https://schwartzmedia.com.au/
import express from "express";
import userRouter from "./routers/userRouter.js";

const app = express();
const PORT = 3003;

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));

// ROUTERS
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
