const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const quotesRouter = require("./router/quotes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(quotesRouter);

app.listen(port, () => {
  console.log("server is up on port" + port);
});
