const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const sentenceGenerator = require('./sentence_generator')
const app = express()
const port = 3000

app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine','handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res) =>{
  res.render('index')
})

app.post('/', (req, res) => {
  const profession = req.body.jobSelection
  const sentence = sentenceGenerator(profession)
  const engineer = profession === 'engineer'
  const designer = profession === 'designer'
  const entrepreneur = profession === 'entrepreneur'
  res.render('index',{sentence:sentence, engineer:engineer, designer:designer, entrepreneur:entrepreneur})
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})