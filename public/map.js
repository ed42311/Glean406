var templat;
var templng;

function deleteFlora() {
  var gettingId = document.getElementById("searchDisplayOnMap").getAttribute("floraId");
  
  $.ajax({
    type: 'DELETE',
    url: "/api/flora/" + gettingId
  }).done(function() {
    window.location = "/";
  })
}

function initMap(category, searchText) {
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
    disableDoubleClickZoom: false,
    scrollwheel: false
  });
  getFlora(map, category, searchText);

}

function getFlora(map, category, searchText){

  if(category === 'My Posts'){
    var url = "/api/flora/myFlora/hello"
  } else {
    var url = "/api/flora"
  }

  $.ajax({
    url: url,
    dataType: 'json',
    type: 'GET'
  }).done(function(data) {  

    console.log(data);
    if(category === 'My Posts'){
      var filterData = data;
      var filterSearch = searchText ? filterData.filter(function(f){
      var name = f.name || '';
      var season = f.season || '';
      var category = f.category || '';
      var description = f.description || '';  
      var creator = f.creator || '';
      return  name.indexOf(searchText) > -1 || 
              season.indexOf(searchText) > -1 ||
              category.indexOf(searchText) > -1 ||
              description.indexOf(searchText) > -1 ||
              creator.indexOf(searchText) > -1;
    }) : filterData;
    filterSearch.forEach(function(flora) {
      
      var contentString = ('<div id=searchDisplayOnMap floraId=' + flora._id + '>\
                   <p> <h3>' + flora.name + '</h3> </p>\
                   <p> <h5>' + "Harvest Season: " + flora.season + '</h5> </p>\
                   <p> <h5>' + "Type: " + flora.category + '</h5> </p>\
                   <p> <h5>' + "Description: " + flora.description + '</h5> </p>\
                   <p> <h5>' + "<button><a href=https://www.google.com/maps/dir/Current+Location/" + flora.lat + "," + flora.lng + " target=_blank>Get Directions </a></button>" +'</h5> </p>\
                   <p> <h5>' + "<button class='floraDelete' id=" + flora._id + " onClick='deleteFlora()'>Delete Post</button>" + '</h5> </p>\
                 </div>');

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      
      var image = 'http://carma.org/images/icons/icon_circle_red_2.gif';
      
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
          animation: google.maps.Animation.DROP,
        })
      }

      floraMarker.setMap(map);

      floraMarker.addListener('click', function() {
        infowindow.open(map, floraMarker);
      });
    });
  }
}
    var filterData = category ? data.filter(function(f){f.category === category}) : data;

    var filterSearch = searchText ? filterData.filter(function(f){
      var name = f.name || '';
      var season = f.season || '';
      var category = f.category || '';
      var description = f.description || '';  
      var creator = f.creator || '';
      return  name.indexOf(searchText) > -1 || 
              season.indexOf(searchText) > -1 ||
              category.indexOf(searchText) > -1 ||
              description.indexOf(searchText) > -1 ||
              creator.indexOf(searchText) > -1;
    }) : filterData;
    filterSearch.forEach(function(flora) {
      

      var contentString = ('<div id=' + flora.name + '>\
                   <p> <h3>' + flora.name + '</h3> </p>\
                   <p> <h5>' + "Harvest Season: " + flora.season + '</h5> </p>\
                   <p> <h5>' + "Type: " + flora.category + '</h5> </p>\
                   <p> <h5>' + "Description: " + flora.description + '</h5> </p>\
                   <p> <h5>' + "<button><a href=https://www.google.com/maps/dir/Current+Location/" + flora.lat + "," + flora.lng + " target=_blank>Get Directions </a></button>" +'</h5> </p>\
                 </div>');


      var infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      
      var image = 'http://carma.org/images/icons/icon_circle_red_2.gif';
      
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
          animation: google.maps.Animation.DROP,
        })
      }

      floraMarker.setMap(map);

      floraMarker.addListener('click', function() {
        infowindow.open(map, floraMarker);
      });
    });
  });
};

$('#categoryControl').change(function() {
  var category = this.value;
    console.log(category);
  initMap(category === 'All' ? undefined : category);
})

$(document).ready(function(){
  $('#searchButton').click(function(e) {
    e.preventDefault();
    var searchText = $('#searchText').val();
    var category = $('#categoryControl').val();
    initMap(category === 'All' ? undefined : category, searchText)
  })
})


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


