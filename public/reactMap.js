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
};


var GoogleMap = react.createClass({
	loadMap: function() {
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
	},
	componentDidMount: function() {
		this.loadMap();
	},
	render: function() {
		return (
			<div>
				
			</div>
			)
	}
});

var GoogleApp = react.createClass({
	render: function() {
		return (
			<div>
				<h3> Hello from Map! </h3>
			</div>

			)
	}
});

React.render(<GoogleApp/>, document.getElementById('ReactMap'));

