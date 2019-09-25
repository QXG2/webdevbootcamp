// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

var request = require('request');

console.log("Let's see ...");
request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
	// eval(require('locus'))
    if(!error && response.statusCode == 200){
        const parsedData = JSON.parse(body);
        console.log('${parsedData.name} lives in ${parsedData.address.city}');
    }
});