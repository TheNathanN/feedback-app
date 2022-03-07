import express from 'express';
import feedbackRoute from './routes/feedback';
import resetAppRoute from './routes/reset-app';

const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/feedback', feedbackRoute);
app.use('/reset-app', resetAppRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
