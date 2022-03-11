"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedback_1 = __importDefault(require("./routes/feedback"));
const reset_app_1 = __importDefault(require("./routes/reset-app"));
const comment_1 = __importDefault(require("./routes/comment"));
const reply_1 = __importDefault(require("./routes/reply"));
const user_1 = __importDefault(require("./routes/user"));
const users_1 = __importDefault(require("./routes/users"));
const cors = require('cors');
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use(cors());
app.use('/reset-app', reset_app_1.default);
app.use('/feedback', feedback_1.default);
app.use('/comment', comment_1.default);
app.use('/reply', reply_1.default);
app.use('/users', users_1.default);
app.use('/user', user_1.default);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
