"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenvx_1 = __importDefault(require("@dotenvx/dotenvx"));
const config_1 = require("./../config");
const code_room_module_1 = require("./modules/code-room/code-room.module");
dotenvx_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Init Module
app.use("/api/code-room", code_room_module_1.CodeRoomModule);
const port = process.env.PORT || 3000;
//Connect Mongoose
(0, config_1.connectMongooseDb)();
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
