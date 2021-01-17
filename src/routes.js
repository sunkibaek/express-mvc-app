const indexRouter = require("./routers/indexRouter");
const usersRouter = require("./routers/usersRouter");

const routes = (app) => {
  app.use("/", indexRouter);
  app.use("/users", usersRouter);
};

module.exports = routes;
