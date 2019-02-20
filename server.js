const Express = require("express");
const app = new Express();

const port = 8000;

app.get("/", (req, res) => {
  res.json("health check");
});

app.get("/health", (req, res) => {
  res.json("Good to go!");
});

app.listen(port, "0.0.0.0", () => {
  console.info("Server is listening on: ", port);
});
