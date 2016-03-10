var submitMap;
function initialize() {
  var myLatlng = new google.maps.LatLng(lat: 46.86077911287492, lng: -113.99279092176516);
  var myOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
  });
}

function placeMarker(location) {
  var marker = new google.maps.Marker({
      position: location, 
      map: map
  });

  map.setCenter(location);
}