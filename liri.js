require("dotenv").config();
var keys = require("./keys.js");
var Spotify= require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios")
var movieName = "bird box"
var commandInput = process.argv[2] 
var queryInput= process.argv[3]
console.log(process.argv)

if (commandInput==='concert-this') { 
    console.log('concert-this')   
}

else if (commandInput==='spotify-this-song') { 
    console.log('spotify-this-song')   
    getSong() 
}


else if (commandInput==='movie-this') { 
    console.log('movie-this')   
getMovie()
}

else if (commandInput==='do-what-it-says') { 
    console.log('do-what-it-says')   
}

else { console.log ("please put in a valid command")}


function getMovie (){ 
    axios.get('http://www.omdbapi.com/?apikey=trilogy&t='+ queryInput)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

}


function getSong() {
  spotify.search({ type: 'track', query: 'Thank You Next' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items); 
  });

};


if (process.argv[2] == 'concert-this' ) {
   
    var artist = process.argv.slice(3).join(" ")
    console.log(artist);
   
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=triliogy";

    request(queryURL, function (error, response, body) {
        if (error) console.log(error);
        var result  =  JSON.parse(body)[0];
        console.log(result.venue.name);
        console.log(result.venue.city);
        console.log(moment(result.datetime).format("MM/DD/YYYY"));
       


    });


