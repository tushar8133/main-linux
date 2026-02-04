import express from "express";
import os from "os";

const app = express();

app.use((req, res, next) => {
  console.log(`File Accessed at ${Date.now()}`);
  next();
})

app.use(express.static("public"));

app.use("/", express.static("."));

app.listen(3000, () => {
  const ip = os.networkInterfaces()?.en0?.filter(o => o?.family === "IPv4")?.[0]?.address;
  console.log(`http://${ip}:3000/preseed.cfg?nocache=1`);
});
