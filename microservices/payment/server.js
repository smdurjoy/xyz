const express = require("express");
const app = express();

const SERVER_NAME = process.env.HOSTNAME;

app.get("/payment", (req, res) => {
  res.json({
    service: "payment-service",
    server: SERVER_NAME,
    time: new Date().toISOString(),
  });
});

app.listen(3000, () => {
  console.log("Payment service running on port 3000");
});