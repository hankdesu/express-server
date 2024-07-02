import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('test');
    res.send('Hello World!')
  })

const httpServer = app.listen(3000, () => {
  console.log(`🚀  api start on port: 3000`);
});
