const express = require("express");
require("./db/mongoose");

// const userRouter = require("./routers/user");
// const categoriesRouter = require("./router/categories");
// const quotesRouter = require("./router/quotes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// app.use(userRouter);
// app.use(categoriesRouter);
// app.use(quotesRouter);

app.listen(port, () => {
  console.log("server is up on port" + port);
});

const User = require("./models/users");
const Category=require('./models/categories')
const Quotes=require('./models/quotes')