const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use("/api", routes);
// whenever I go to /api i would require routes/news
app.use(cors());

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
