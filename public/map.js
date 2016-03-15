var templat;
var templng;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.86077911287492, lng: -113.99279092176516},
    zoom: 8,
<<<<<<< HEAD
  })
};
=======
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
      
      var contentString = ('<div id=' + flora.name + '>\
                   <p> <h3>' + flora.name + '</h3> </p>\
                   <p> <h5>' + "Harvest Season: " + flora.season + '<h5> </p>\
                   <p> <h5>' + "Type: " + flora.category + '<h5> </p>\
                   <p> <h5>' + "Description: " + flora.description + '<h5> </p>\
                 </div>');
                 

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      
      var image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKFgkLDSIPDRgMFhoUFRAWIB0iIiAdHx8kKDQsJCYlJx8fLTEnJS0tOjouIyszRDMtQyg5NSsBCgoKDg0OGhAQGy0lHSUtLSstLS8tLS0tLSstLS0rLS03LS0tLS0vLS0tLS0rLS01NS0tLy0rKys1LS0tLS0tL//AABEIADIAMgMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAGBwADBQIB/8QANRAAAQIEBAIHBQkAAAAAAAAAAQIDAAQFEQYSITGBkQcUIkFRYXEjMkNisRMVJVJTcqGiwv/EABoBAAICAwAAAAAAAAAAAAAAAAAEBQYBAgP/xAApEQACAgEDAwIGAwAAAAAAAAAAAQIDBAUREhMhMSJRBhQyM0FhI0KB/9oADAMBAAIRAxEAPwB3wJGN/Yya/X6bQJYP1KYCc3uAaqWfAJGpjWc1E7U48rX6fAJuY3rs+M1Ew4oMn3VzqwjMPHLp9TC/zDJCOnVL7kjlvF2LZXtz2H5Vxsb9VcsocLqvB12bPT6X9uZv4cxnTK24ZZKltzyfeamBlXpvbuPDXyjtG1SErsWVfdeAmjoKeT2AyY+JK0xQaQ/UJgXyCyEg2LizolI9TyFzHO2fBHaiiV01CAsKSHajNqr1bUFzjx9kFaoaQDplB28ue5vCTs5Fo+XjXBVw/wBN8zt9SrXzMZ5o1WPse9dHjBzQOjcyq5Js1VsLByzjfaYcScqkqGwuNbfTujTlwNq6lFcZeAp6OsTrrciuUn1fiMpo53faJ7lW8dLHz9Ybps5EDqGJ0Zcl9LDOGCPFb0vzilztMpwJyJSqYX5m+VPLtc4js2ZZPh6hOUpgoxOvNtJaQU2SLC/hEfGZZ+hH6izrc0r4h4WjKmzPRrJ1mbHxVcbQObDpVk+8Jm2pHGMdV8jCx47l+DJxVPxlT3Qo5ZhZZd+YLGn9gkwxh3PqbEVrOMnjtjyiZKSKnpZYUivU+ZI7DsuWx6pVf/URudEtPw7LvKIMsNZrGI6ESyTlstjRZlCRtDKihadqR25J2G0DijSNyM+YZyDaOTitxuE92dYbllTOLKS2jcTIcPoi6j9I6Yi/lI/WZbYzHsNomyhgxjyhqrlFUiXSOty6vtWPmI3TxFx62hfJr5oe03K6Fqk/AqZB0XyrBC0mygoWII3BERLTgy9uUboKcPBuy7osNY7Ra9hOyOxa66nKdY2cl7HOEWzHn3kAE3ELWWOL2iPVRa7vwFfRfQnAt2uTSCA4kty2bcpv2l8bADyB8YkMSjZcmVjXM2NkunD8DIh8r5zB5MfoEMUYJYq7pnZBYanjqr8jp+Ydx8x/MLWYykS+Bqk8X0y7xAqZoOIqeopdprqkjYse0SeWvMQlKm5fgsMNVxLPLKmqZX5pQSzSZu5/UTkHNVo1VV3sby1LDj/YJaD0euLdRMYgcQQDcNN6g/uPf6DnDVOIl6pENma25xcKxhISltIQgAJSLC2gAh3z2RXnJt/ssjIEgAkAEgA8gA9gAkAEgA//2Q==';
      if(flora.isPrivate == false){
        var floraMarker = new google.maps.Marker({
          position: {
            lat: Number(flora.lat), 
            lng: Number(flora.lng)
          },
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP
        })} else {
        var floraMarker = new google.maps.Marker({
          position: {
            lat: Number(flora.lat), 
            lng: Number(flora.lng)
          },
          map: map,
          icon: image,
          draggable: false,
          animation: google.maps.Animation.DROP
        })
      }

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


>>>>>>> ec7ce663c606476c7d7991b7b117865046687c71
