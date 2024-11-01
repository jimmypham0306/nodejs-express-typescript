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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeRoomService = void 0;
const code_room_model_1 = require("../models/code-room.model");
class CodeRoomService {
    constructor() {
        this.items = [];
    }
    getAllItems() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield code_room_model_1.ItemModel.find();
        });
    }
    createItem(itemData) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(itemData);
            const test = {
                "name": "name",
                "description": "description"
            };
            const item = new code_room_model_1.ItemModel(test);
            console.log(item);
            try {
                yield item.save();
            }
            catch (error) {
                console.log(error);
            }
            return yield item.save();
        });
    }
}
exports.CodeRoomService = CodeRoomService;
