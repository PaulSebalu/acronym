import express, { json, urlencoded } from "express";
import cors from "cors";
import env from "dotenv";

import acronymRouter from "./acronym/routes/routes";

env.config();

const app = express();
app.use(cors(), json(), urlencoded({ extended: true }));

app.use(acronymRouter);

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Acronyms REST API",
  });
});

app.use("*", (req, res) =>
  res.status(405).json({
    status: 405,
    message: "You need to be a little more specific...",
  })
);

let PORT;

if (process.env.NODE_ENV === "test") {
  PORT = 3000;
} else {
  PORT = process.env.PORT || 2000;
}

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}...`);
});

export default app;
