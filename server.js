const express = require("express");
const redis = require("redis");

const app = express();
const SERVER_NAME = process.env.HOSTNAME;

const client = redis.createClient({
  url: "redis://redis:6379",
});

client.connect();

app.get("/", async (req, res) => {
  const count = await client.incr("hits");

  res.json({
    message: "Hello from backend!",
    server: SERVER_NAME,
    totalHitsAcrossAllServers: count,
    time: new Date().toISOString(),
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
