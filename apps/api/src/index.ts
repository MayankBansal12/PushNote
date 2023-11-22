import { createServer } from "./server";
import { log } from "logger";
require("dotenv").config();

// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  log(`Api running on ${port}` + " http://locahost:" + port + process.env.SECRET);
});
