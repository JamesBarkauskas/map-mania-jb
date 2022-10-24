const express = require("express");
const app = express();

app.use(express.static(__dirname + '/client'))
app.use(express.json());

const port = process.env.PORT || 3000


/*app.get('/test', function(request, response) {
	response.type('text/plain')
	response.send('Node.js and Express running on port='+port)
}) */

var favoritePlaces = {
	"places": [
		{"name":"Shawnee National Forest, IL", "latt": 37.5147, "long": -88.8734},
		{"name":"Giant City State Park, IL", "latt": 37.6061, "long": -89.1859},
		{"name":"New Orleans, LA", "latt": 29.9511, "long": -90.0715},
		{"name":"Myrtle Beach, SC", "latt": 33.6891, "long": -78.8867},
		{"name":"Orlando, FL", "latt": 28.5384, "long": -81.3789},
		{"name":"Breckenridge, CO", "latt": 39.4817, "long": -106.0384},
		{"name":"San Tan Valley, AZ", "latt": 33.1773, "long": -111.5468},
		{"name":"Matthiessen State Park, IL", "latt": 41.2960, "long": -89.0244},
		{"name":"San Diego, CA", "latt": 32.7157, "long": -111.1611},
		{"name":"Nashville, TN", "latt": 36.1627, "long": -86.7816},
		{"name":"Wisconsin Dells, WI", "latt": 43.6275, "long": -89.7710}
	]
}

app.get('/send', function(req, res) {
	console.log(favoritePlaces)
	res.json(favoritePlaces)
})

app.listen(port, function() {
	console.log("Server is running at http://localhost:3000/")
})
