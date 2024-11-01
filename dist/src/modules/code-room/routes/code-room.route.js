"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
const controller = new controllers_1.CodeRoomController();
router.get('/', controller.getAll);
router.post('/', controller.create);
exports.default = router;
