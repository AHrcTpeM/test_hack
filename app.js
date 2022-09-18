import express from 'express';
import 'dotenv/config';
import nodemailer from 'nodemailer';
const app = express();
const port = 3005;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

const {
  USER,
  PASSWORD
} = process.env;

app.post('/form', (req, res) => {
  let name = req.body.name;
  let from = req.body.from;
  let message = "Дякуємо за заявку! Скоро з вами зв'яжеться наш менеджер, чекайте на дзвінок на цей номер: " + req.body.phone;
  let to = req.body.email;;
  let smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: USER,
          pass: PASSWORD
      }
  });
  let mailOptions = {
      from: from,
      to: to, 
      subject: name + ' | new message !',
      text: message
  }
  smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
          console.log(error);
      }else{
          res.redirect('/');
      }
  });


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