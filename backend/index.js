import express from "express";
import cookieParser from "cookie-parser";
import logger from "./src/config/logger.conf.js";
import userRouter from "./src/routes/user.route.js";
import moduleRouter from "./src/routes/module.route.js";
import { SERVER } from "./src/config/constants.conf.js";
const app = express();
const PORT = SERVER.PORT;
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/modules", moduleRouter);
app.get("/", (req, res) => {
  res.send({ message: "API is running..." });
});
app
  .listen(PORT, () => {
    logger.log("info", `Server is running on port ${PORT}`);
  })
  .on("error", (err) => {
    logger.error(`Server error: ${err}`);
    process.exit(1);
  });
