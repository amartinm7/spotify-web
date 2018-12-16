const axios = require ('axios')
const request = require('request'); // "Request" library

class SpotifyWebApi{
  constructor(){
    console.log('init SpotifyWebApi')
    this.client_id = 'c90bfd0ed0754972bfec8eae04bdcdbc'; // Your client id
    this.client_secret = 'c69c83ff4deb4516a63d3fdd564e299d'; // Your secret
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
    this.getArtists()
  }
  
  getArtists(){
    request.post(this.authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
      
        // use the access token to access the Spotify Web API
        const token = body.access_token;
        const options = {
          url: 'https://api.spotify.com/v1/users/jmperezperez',
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };
        request.get(options, function(error, response, body) {
          console.log(body);
        });
  
        const config = {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
  
        const data = {
          'HTTP_CONTENT_LANGUAGE': 'us-US'
        }
  
        const url = `${this.spotifyURL}/artists`
        axios
          .get(url, data, config)
          .then(response => {
              console.log(response)
            }
          ).catch(function (error) {
          console.error(error)
        })
      }
    });
  

  }
}

//export default new SpotifyWebApi()
module.export = new SpotifyWebApi()
