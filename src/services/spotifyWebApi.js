const axios = require ('axios')
const request = require('request'); // "Request" library

class SpotifyWebApi{
  constructor(){
    console.log('init SpotifyWebApi...')
    this.client_id = 'c90bfd0ed0754972bfec8eae04bdcdbc'; // Your client id
    this.client_secret = 'dc6745d8f47f4c3bb2fe59baf00f6a85'; // Your secret
    this.authURL = 'https://accounts.spotify.com/api/token'
    this.authOptions = {
      url: this.authURL,
      headers: {
        'Authorization': 'Basic ' + (new Buffer(this.client_id + ':' + this.client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };
    this.spotifyURL = 'https://api.spotify.com/v1'
  }
  
  async getArtists(){
    const self = this
    return new Promise((resolve, reject) => {
      request.post(this.authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
          // use the access token to access the Spotify Web API
          const token = body.access_token;
          console.log(`token ${token}`)
          resolve(token)
        }
        reject('error: invalid login')
      })
    })
  }

//export default new SpotifyWebApi()
module.exports = new SpotifyWebApi()
