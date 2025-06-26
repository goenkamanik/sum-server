const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Working fine",
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
