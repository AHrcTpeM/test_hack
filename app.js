import express from 'express';
const app = express();
const port = 3005;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.post('/form', (req, res) => {
  //console.log(req.body);
  res.json({status: 'OK', msg: 'Данные с формы получены и обработаны!', dataForm: req.body});
})

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})