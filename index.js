#!/usr/bin/env node
var http = require('http');

var name = process.argv[2]
// leaving my supersecret credentials here for the lolz
// so that people dont have to register to the marker API service
// Got only 1k free API calls a day!
var username = process.env.GOT_TRADEMARK_USER ||'alexalex'
var password = process.env.GOT_TRADEMARK_PASSWD || 'Km4FcTd7b3'

var options = {
  host: 'www.markerapi.com',
  path: `/api/v1/trademark/search/${name}/username/${username}/password/${password}`
};

callback = function(res) {
  var results = '';

  //another chunk of data has been recieved, so append it to `str`
  res.on('data', function (chunk) {
    results += chunk;
  });

  //the whole res has been recieved, so we just print it out here
  res.on('end', function () {
    var trademarks = [];

    try {
      if (res.statusCode !== 200) {
        throw new Error(`Got ${res.statusCode} from the API. Mumble.`)
      }

      results = JSON.parse(results);

      if (results.count) {
        console.log("Awwww, sheeez... We found the following registered trademarks:")

        results.trademarks.forEach(function(trademark){
          console.log(` * ${trademark.wordmark} (${trademark.description}), registered on ${trademark.registrationdate}`)
        })
      } else {
        console.log(`Seems like there's no trademark registered for "${name}". Go for it. But be subtle.`)
      }
    } catch (err) {
      console.log(err)
    }
  });
}

http.request(options, callback).end();
