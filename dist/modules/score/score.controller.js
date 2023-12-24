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
exports.ScoreController = void 0;
const score_service_1 = require("./score.service");
const insertIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield score_service_1.ScoreService.insertToDB(req.body);
        res.send({
            success: true,
            message: 'New Score Created',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getScores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield score_service_1.ScoreService.getAllScore();
        res.send({
            success: true,
            message: 'All Score',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield score_service_1.ScoreService.getSingleScore(Number(req.params.id));
        res.send({
            success: true,
            message: 'Single Score',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const deleteScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield score_service_1.ScoreService.deleteSingleScore(Number(req.params.id));
        res.send({
            success: true,
            message: 'Score Deleted',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.ScoreController = {
    insertIntoDB, getScores, getScore, deleteScore
};
