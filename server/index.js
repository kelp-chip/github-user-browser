const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8888;

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.listen(PORT, () => {
  console.log(`Now listening on http://localhost:${PORT}`);
});
