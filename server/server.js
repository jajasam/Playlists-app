const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')
const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(cors())
app.use(bodyParser.json())

// routes
app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/',
        clientId: `${process.env.REACT_APP_API_KEY_SPOTIFY_CLIENT_ID}`,
        clientSecret: `${process.env.REACT_APP_API_KEY_SPOTIFY_CLIENT_SECRET}`
    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        console.log('The token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        console.log('The refresh token is ' + data.body['refresh_token']);
        data.json({
        accessToken: data.body['access_token'],
        refreshToken: data.body['refresh_token'],
        expiresIn: data.body['expires_in']
    })}).catch(err => {
        res.sendStatus(400)
    })
});

app.post('/refresh', (req,res) => {
    const refreshToken = req.body['refresh_token']

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/',
        clientId: `${process.env.REACT_APP_API_KEY_SPOTIFY_CLIENT_ID}`,
        clientSecret: `${process.env.REACT_APP_API_KEY_SPOTIFY_CLIENT_SECRET}`,
        refreshToken
    })

    spotifyApi
        .refreshAccessToken()
        .then(data => {
            console.log('token refresh')
            data.json({
                accessToken: data.body['access_token'],
                expiresIn: data.body['expires_in']
            })
        })
        .catch(err => console.error('Could not refresh access token'));
})

app.listen(3001)