const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('local root called!');
    //res.send("hello Cosi")
    res.redirect('/info.html');
})

app.get('/test', (req, res)=>{
    res.send('test succeeded!')
})

app.get('/data', (req, res)=>{
    let exampleData = {
        name: 'Cosi',
        age: 22,
    }
    res.send(exampleData);
}) 

app.post('/saveData', (req, res) => {
    console.log(req.body);
    res.send(`data received with id: ${req.body.id}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})