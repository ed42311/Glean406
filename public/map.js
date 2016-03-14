
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
  })



  google.maps.event.addListenerOnce(map, 'click', function(e) {
    templat=e.latLng.lat();
    templng=e.latLng.lng();

    document.getElementById("lat").value = templat;
    document.getElementById("lng").value = templng;

    var marker = new google.maps.Marker({
      position: {lat: templat, lng: templng},
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP
    });
    //   marker.addListener('click', toggleBounce);
    //   }

    //   function toggleBounce() {
    //     if (marker.getAnimation() !== null) {
    //       marker.setAnimation(null);
    //     } else {
    //       marker.setAnimation(google.maps.Animation.BOUNCE);
    //     }
    // }

    google.maps.event.addListener(marker, 'dragend', function(e){

      templat=e.latLng.lat();
      templng=e.latLng.lng();

      document.getElementById("lat").value = templat;
      document.getElementById("lng").value = templng;

    });
  });
};

function submitForm(e){
          e.preventDefault();

          var name = document.getElementById("name").value;
          var category = document.getElementById("category").value;
          var season = document.getElementById("season").value;
          var description = document.getElementById("description").value;


          var data = ({
                    name: name,
                    category: category,
                    season: season,
                    lat: templat,
                    lng: templng, 
                    description: description
            });

            $.ajax({
              url: "/api/flora",
              dataType: 'json',
              data: data,
              type:'POST',
              success: function(response){
                console.log("posting data!", data, response)
                // document.location='/'
              }.bind(this),
              error: function(xhr, status, err){
                console.log("not posting data!")
                console.error(this.props.url, status, err.toString());
              }.bind(this)
            })
          };

