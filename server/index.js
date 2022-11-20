const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/',
        clientId: '',
        clientSecret: ''
    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => res.json({
        accessToken: data.body['access_token'],
        refreshToken: data.body['refresh_token'],
        expiresIn: data.body['expires_in']
    })
    .catch(err => {
        res.sendStatus(400)
    })
)});

app.listen(3001)