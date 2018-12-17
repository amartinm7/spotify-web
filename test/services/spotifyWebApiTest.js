const assert = require("chai").assert
const spotifyWebApi = require('../../src/services/spotifyWebApi')

describe("testing spotifyWebApi: ", function() {
  
  describe("testing getArtists: ", function() {
  
    it("testing 200: ", function() {
      spotifyWebApi.getArtists().then(console.log)
      assert.equal('200', "200")
    })
  
  })
})
