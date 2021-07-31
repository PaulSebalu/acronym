import { express, json } from "express";
// import { acronymns } from "./controllers";

const acronymRouter = express.Router();
acronymRouter.use(json());

acronymRouter.get("/acronym", acronyms);

export default acronymRouter;
