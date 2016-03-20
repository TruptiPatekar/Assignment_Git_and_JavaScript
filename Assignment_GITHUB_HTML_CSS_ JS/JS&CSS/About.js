var myCenter=new google.maps.LatLng(40.261979313,-76.8803421571);
var marker;

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:8, /*Zoom level selected 8 to get closer view*/
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);