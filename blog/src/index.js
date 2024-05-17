const express = require('express')
const path = require('path');
const morgan = require('morgan')
const app = express()
const hbs = require('express-handlebars');
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

// http logger
app.use(morgan('combined'))
// template engine
app.engine('hbs', hbs.engine({
  extname: '.hbs'
  
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resounces/views'));


app.get('/', (req, res) => {
   res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})



// localhost-127.0.0.1

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})