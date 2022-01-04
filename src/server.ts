import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";

const app = express();

app.use(json());
app.use(router);

app.listen(3333, async () => {
  await db.sync();
  console.log(`servidor rodando na porta 3333!`);
});
