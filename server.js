const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/recipes/:food', function (req, res) {
    request(`http://www.recipepuppy.com/api/?q=${req.params.food}`, function(err, response){
        let apiBody = JSON.parse(response.body)
        let foods = apiBody.results
        foods.forEach(f => f.ingredients.split(', '))
        // console.log(foods)
        // console.log(foods[0].ingredients)


        // let foodOfIntrest = foods.filter(f => f.title.includes(req.params.food))
        // let foodIndex = foods.indexOf[req.params.food]
        // let foodOfIntrest =  foods[foodIndex]
        res.send(foods)
    })

})

const port = 8080
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})