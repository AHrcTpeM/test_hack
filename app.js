import express from 'express';
const app = express();
const port = 3005;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})