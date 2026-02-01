const express = require("express");
const app = express();

const SERVER_NAME = process.env.HOSTNAME;

app.get("/order", (req, res) => {
  res.json({
    service: "order-service",
    server: SERVER_NAME,
    time: new Date().toISOString(),
  });
});

app.listen(3000, () => {
  console.log("Order service running on port 3000");
});