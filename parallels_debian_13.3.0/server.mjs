import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log(Date.now())
  next();
})
app.use(express.static("public"));
app.use("/", express.static("."));

app.listen(3000, () => {
  console.log("SERVER STARTED");
});


