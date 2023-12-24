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
exports.TopicService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.topic.create({ data });
    return result;
});
const getAllTopic = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.topic.findMany();
    return result;
});
const getSingleTopic = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.topic.findUnique({
        where: {
            id
        },
        include: {
            questions: true
        }
    });
    return result;
});
const updateSingleTopic = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.topic.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
exports.TopicService = {
    insertToDB, getAllTopic, getSingleTopic, updateSingleTopic
};
