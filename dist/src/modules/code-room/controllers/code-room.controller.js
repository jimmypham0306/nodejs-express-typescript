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
exports.CodeRoomController = void 0;
const code_room_service_1 = require("../services/code-room.service");
class CodeRoomController {
    constructor() {
        this.moduleAService = new code_room_service_1.CodeRoomService();
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this.moduleAService.getAllItems();
                res.json(items);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to retrieve items" });
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const itemData = req.body;
                const createdItem = yield this.moduleAService.createItem(itemData);
                console.log('11111111111111111111111');
                res.status(201).json(createdItem);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to create item" });
            }
        });
    }
}
exports.CodeRoomController = CodeRoomController;
