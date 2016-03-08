var mapStyles = [{
    featureType: 'poi',
    stylers: [{ visibility: 'off' }]  
   },{
    featureType: 'transit.station',
    stylers: [{ visibility: 'off' }]  
   },{
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "on" }]
   },{
    "featureType": "poi.park",
    "stylers": [{ "visibility": "on" }]
   },{
    "featureType": "poi.attraction",
    "stylers": [{ "visibility": "off" }]
  },{
    "featureType": "poi.business",
    "stylers": [{ "visibility": "off" }]
  },{
    "featureType": "poi.government",
    "stylers": [{ "visibility": "off" }]
  },{
    "featureType": "poi.medical",
    "stylers": [{ "visibility": "off" }]
  },{
    "featureType": "poi.place_of_worship",
    "stylers": [{ "visibility": "off" }]
  },
];

module.exports = mapStyles;