var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  // request.get('https://github.com/nodejs/node')
  //        .on('error', function(err) {
  //         throw err;
  //        })
  //        .on('response', function(response) {
  //         console.log(response['login']);
  //        })
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});