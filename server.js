const express = require("express");
const app = express();

const SERVER_NAME = process.env.HOSTNAME;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from backend!",
    server: SERVER_NAME,
    time: new Date().toISOString(),
  });
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
