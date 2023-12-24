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
exports.QuestionController = void 0;
const question_service_1 = require("./question.service");
const insertIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield question_service_1.QuestionService.insertToDB(req.body);
        res.send({
            success: true,
            message: 'Questions Created Successfully',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getAllQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield question_service_1.QuestionService.getQuestions();
        res.send({
            success: true,
            message: 'All Questions Fetched',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield question_service_1.QuestionService.getQuestion(Number(req.params.id));
        res.send({
            success: true,
            message: 'Single Question Fetched',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const deleteSingleQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield question_service_1.QuestionService.deleteQuestion(Number(req.params.id));
        res.send({
            success: true,
            message: 'Question Deleted',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.QuestionController = {
    insertIntoDB, getAllQuestions, getSingleQuestion, deleteSingleQuestion
};
