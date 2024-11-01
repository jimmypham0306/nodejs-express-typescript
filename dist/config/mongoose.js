"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongooseDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenvx_1 = __importDefault(require("@dotenvx/dotenvx"));
dotenvx_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://root:example@mongo:27017/test";
const connectMongooseDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('start to connect db', MONGODB_URI);
        yield mongoose_1.default.connect(MONGODB_URI, {});
        console.log("Mongo DB connected!");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
});
exports.connectMongooseDb = connectMongooseDb;
