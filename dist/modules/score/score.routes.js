"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreRoutes = void 0;
const express_1 = __importDefault(require("express"));
const score_controller_1 = require("./score.controller");
const router = express_1.default.Router();
router.get('/:id', score_controller_1.ScoreController.getScore);
router.delete('/:id', score_controller_1.ScoreController.deleteScore);
router.get('/', score_controller_1.ScoreController.getScores);
router.post('/create-score', score_controller_1.ScoreController.insertIntoDB);
exports.ScoreRoutes = router;
