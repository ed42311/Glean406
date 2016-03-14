var templat;
var templng;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.86077911287492, lng: -113.99279092176516},
    zoom: 8,
    styles: [{
      featureType: 'poi',
      stylers: [{ visibility: 'off' }]  // Turn off points of interest.
    }, {
      featureType: 'transit.station',
      stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
    }],
    disableDoubleClickZoom: true
  });

  getFlora(map);
}

function getFlora(map){
  console.log('got to this point');

  $.ajax({
    url: "/api/flora",
    dataType: 'json',
    type: 'GET'
  }).done(function(data) {
    data.forEach(function(flora) {
      console.log(flora);
      
      var contentString = ('<div id=' + flora.name + '>\
                   <p> <h3>' + flora.name + '</h3> </p>\
                   <p> <h5>' + "Harvest Season: " + flora.season + '<h5> </p>\
                   <p> <h5>' + "Type: " + flora.category + '<h5> </p>\
                   <p> <h5>' + "Description: " + flora.description + '<h5> </p>\
                 </div>');
                 

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      

      var floraMarker = new google.maps.Marker({
        position: {
          lat: Number(flora.lat), 
          lng: Number(flora.lng)
        },
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
      });
      floraMarker.setMap(map);

      floraMarker.addListener('click', function() {
        infowindow.open(map, floraMarker);
      });
    });

  });

  console.log('after done');
};    
/*
      var markerOne = new google.maps.Marker({
      position: {e.lat, e.lng},
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP
    });

    markerOne.setMap(map);
};
*/


