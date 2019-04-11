var request = require('request');
var secrets = require('./secrets');
var fs = require('fs');



console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  if (repoOwner === true) {

    var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'Bearer ' + secrets['GITHUB_TOKEN']
    }
  };

  request(options, function(err, res, body) {
    cb(err, JSON.parse(body));
  });
  } else {
    console.log('Need to type repo owner and repo name');
  }
}

function downloadImageByURL(url, filePath) {
  // ...
  request.get(url)
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log(response.statusMessage, response.headers['content-type']);
  })

  .pipe(fs.createWriteStream(filePath));
}



getRepoContributors(process.argv[2], process.argv[3], function(err, result) {

  result.forEach(function(element) {
    console.log(element.avatar_url);

  });
});

// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")