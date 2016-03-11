var templat;
var templng;
var marker;


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
  })



  google.maps.event.addListenerOnce(map, 'click', function(e) {
  
    templat=e.latLng.lat();
    templng=e.latLng.lng();

      marker = new google.maps.Marker({
        position: {lat: templat, lng: templng},
        map: map,
        draggable: true
      });
  });

  google.maps.event.addListener(marker, 'dragend', function(e){
    templat=e.latLng.lat();
    templng=e.latLng.lng();

      console.log(templat);
      console.log(templng);

  })
};

