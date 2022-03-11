import express from 'express';
import feedbackRoute from './routes/feedback';
import resetAppRoute from './routes/reset-app';
import commentRoute from './routes/comment';
import replyRoute from './routes/reply';
import userRoute from './routes/user';
import usersRoute from './routes/users';

const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/reset-app', resetAppRoute);
app.use('/feedback', feedbackRoute);
app.use('/comment', commentRoute);
app.use('/reply', replyRoute);
app.use('/users', usersRoute);
app.use('/user', userRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
