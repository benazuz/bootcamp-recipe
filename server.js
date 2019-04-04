const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/recipes/:foodName', function (req, res) {
    request(`http://www.recipepuppy.com/api/?q=${req.params.foodName}`, function(err, response){
        let apiBody = JSON.parse(response.body)
        let foods = apiBody.results
        // for(let f of food){
        //     let splicedFood = f.map(f => f.ingredients.split(','))
        //     foods = splicedFood
        // }
        // console.log(foods)
        // console.log(foods[0].ingredients)
        // let newFoods = []
        // for(let f of foods){
            //     let i = f.map(s => s.ingredients.split(','))
            //     newFoods.push(i)
            // }
            foods.forEach(f => f.ingredients = f.ingredients.split(', '))
            


        // let foodOfIntrest = foods.filter(f => f.title.includes(req.params.food))
        // let foodIndex = foods.indexOf[req.params.food]
        // let foodOfIntrest =  foods[foodIndex]
        console.log('someone is getting food recipes')
        // console.log(foods)
        res.send(foods)
    })

})

const port = 8080
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})