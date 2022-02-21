import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}...`);
});
