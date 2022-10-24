var gMap;

function initApp() {
    console.log('Map Mania starting...');
    start();
}

async function start() {
    try{
        const response = await fetch('/send')
        const data = await response.json()
        mapPoints(data)
    } catch(e) {
        console.log('There was an error getting the data')
    }
}

function mapPoints(data) {
    var dataList = Object.values(data.places)
    for (let i = 0; i < dataList.length; i++) {
        var name = dataList[i].name
        var latt = dataList[i].latt
        var long = dataList[i].long
        new google.maps.Marker({position:{lat:latt, lng:long},
        map: gMap, title: name})
    }
}

function initMap() {
    // creating a new map
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3
    });

    var marker = new google.maps.Marker({position:{lat:37.5147, lng:-88.8734},
    map:gMap}); 

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });
}

function updateGame() {
    console.log('function updateGame()!');
    var zoomLevel = gMap.getZoom();
    var inBounds = false;

    if (gMap.getBounds().contains({lat:37.5147,lng:-88.8734})) {
        inBounds = true;
    }

    console.log('inBounds:'+inBounds+' zoomLevel:'+zoomLevel);
}

