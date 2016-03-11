// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 46.86077911287492, lng: -113.99279092176516},
//     zoom: 8,
//     styles: [{
//       featureType: 'poi',
//       stylers: [{ visibility: 'off' }]  // Turn off points of interest.
//     }, {
//       featureType: 'transit.station',
//       stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
//     }],
//     disableDoubleClickZoom: true
//   })
// };


      
    var GoogleMap = React.createClass({
        render: function() {
          return (
            <div id="map">
              <h3> Hello </h3>
            </div>
            )
        }
      })
    ReactDOM.render(
      <GoogleMap/>,
      document.getElementById('renderMap')
    );
