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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield prisma.feedback.findMany();
    if (feedback.length > 0) {
        res.status(404).json({ message: 'No feedback available' });
    }
    else {
        res.json(feedback);
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, category, detail } = req.body;
    if (!title || !category || !detail) {
        res.status(400).json({ message: 'Please fill out the required fields' });
    }
    const newFeedback = yield prisma.feedback.create({
        data: {
            title,
            category,
            description: detail,
        },
    });
    res
        .status(201)
        .json({ data: newFeedback, message: 'Feedback was created successfully' });
}));
router.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, category, detail, status } = req.body;
    if (!title || !category || !detail || !status) {
        res.status(400).json({ message: 'Please fill out the required fields' });
    }
    const editedFeedback = yield prisma.feedback.update({
        where: {
            id,
        },
        data: {
            title,
            category,
            description: detail,
            status,
        },
    });
    if (editedFeedback) {
        res.status(400).json({ message: 'There was a problem updating feedback' });
    }
    res.json({
        data: editedFeedback,
        message: 'Feedback was updated successfully',
    });
}));
router.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id) {
        res.status(400).json({ message: 'Need the id of the feedback to delete' });
    }
    const deletedFeedback = yield prisma.feedback.delete({
        where: {
            id,
        },
    });
    if (deletedFeedback) {
        res.status(400).json({ message: 'There was a problem deleting message' });
    }
    res.json({
        dataDeleted: deletedFeedback,
        message: 'Feedback was deleted successfully',
    });
}));
exports.default = router;
