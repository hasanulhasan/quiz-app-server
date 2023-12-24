"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicRoutes = void 0;
const express_1 = __importDefault(require("express"));
const topic_controller_1 = require("./topic.controller");
const router = express_1.default.Router();
router.get('/:id', topic_controller_1.TopicController.getTopic);
router.patch('/:id', topic_controller_1.TopicController.updateTopic);
router.get('/', topic_controller_1.TopicController.getTopics);
router.post('/create-topic', topic_controller_1.TopicController.insertIntoDB);
exports.TopicRoutes = router;
