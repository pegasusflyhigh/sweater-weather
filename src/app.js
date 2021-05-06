const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express()
const port = process.env.PORT || 3000

//define paths for express config
const publicDirectory = path.join(__dirname, '../public') 
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup static directory to serve
app.use(express.static(publicDirectory))

//setup handlebars engine and views location
app.set('view engine', 'hbs') //set handlebars
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App', 
        name: 'Bhuvna Prabhu'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me!',
        name: 'Bhuvna Prabhu'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        name: 'Bhuvna Prabhu',
        title: 'Help Page'
    })
})

app.get('/weather', (req, res) => {
    res.render('index', {
        title: 'Weather App', 
        name: 'Bhuvna Prabhu'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404-error', {
        name: 'Bhuvna Prabhu',
        title: 'Help Page not found'
    })
})

app.get('*', (req, res) => {
    res.render('404-error', {
        name: 'Bhuvna Prabhu',
        title: '404'
    })
})

app.listen(port)