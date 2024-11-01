import express, { Express, Response, Request } from "express";
import dotenvx from "@dotenvx/dotenvx";
import { connectMongooseDb } from "./../config";
import { CodeRoomModule } from "./modules/code-room/code-room.module";

dotenvx.config();

const app: Express = express();
app.use(express.json());

// Init Module
app.use("/api/code-room", CodeRoomModule);

const port = process.env.PORT || 3000;

//Connect Mongoose
connectMongooseDb();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
