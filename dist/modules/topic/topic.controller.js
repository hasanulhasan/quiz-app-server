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
exports.TopicController = void 0;
const topic_service_1 = require("./topic.service");
const insertIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield topic_service_1.TopicService.insertToDB(req.body);
        res.send({
            success: true,
            message: 'New Topic Created',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getTopics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield topic_service_1.TopicService.getAllTopic();
        res.send({
            success: true,
            message: 'All Topic',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getTopic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield topic_service_1.TopicService.getSingleTopic(Number(req.params.id));
        res.send({
            success: true,
            message: 'Single Topic',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const updateTopic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const payload = req.body;
    try {
        const result = yield topic_service_1.TopicService.updateSingleTopic(id, payload);
        res.send({
            success: true,
            message: 'Topic Updated',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.TopicController = {
    insertIntoDB, getTopics, getTopic, updateTopic
};
