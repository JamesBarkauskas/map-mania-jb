var gMap;

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

function initApp() {
    console.log('Map Mania starting...');
}