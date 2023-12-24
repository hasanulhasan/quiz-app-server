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
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const insertToDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.insertIntoDB(req.body);
        res.send({
            success: true,
            message: 'User Created Successfully',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.getUsers();
        res.send({
            success: true,
            message: 'All User',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.getUser(Number(req.params.id));
        res.send({
            success: true,
            message: 'Single User fetched',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const updateSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const payload = req.body;
    try {
        const result = yield user_service_1.UserService.updateUser(id, payload);
        res.send({
            success: true,
            message: 'Single User fetched',
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.UserController = {
    insertToDB, getAllUsers, getSingleUser, updateSingleUser
};
