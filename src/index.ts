const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/feedback', require('./routes/feedback'));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
