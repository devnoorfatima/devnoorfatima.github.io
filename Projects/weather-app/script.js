$.getJSON('https://geoip-db.com/json/')
.done(function (location) {
  $('#country').html(`${'Country:'} ${location.country_name}`);
  $('#state').html(location.state);
  $('#city').html(`${'City:'} ${location.city}`);
  $('#latitude').html(location.latitude);
  $('#longitude').html(location.longitude);
  $('#ip').html(location.IPv4);
   var lon = [location.longitude];
   var lat = [location.latitude];
  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon)
  .done(function(data){
    $('#temperature').html(data.main.temp.toFixed(1)+ "°C");
    $('#type').html(`${data.weather[0].main}`);
    
    if(data.main.temp<=1){
     $('body').css("background","url(./snow.jpeg) fixed no-repeat");
     $('body').css("background-size","cover");
    }
    else if(data.main.temp<=20){
    $('body').css("background","url(./cold.jpeg) fixed no-repeat");
     $('body').css("background-size","cover");

    }
    else if(data.main.temp<=35){
        $('body').css("background","url(./mild.jpeg) fixed no-repeat");
        $('body').css("background-size","cover");
    }
    else if(data.main.temp>35){
        $('body').css("background","url(./sunny.jpeg) fixed no-repeat");
        $('body').css("background-size","cover");
    }
})
});
function getFarenheit(){
    $("#temperature").html(((parseInt($("#temperature").text()) * 1.8) + 32).toFixed(1)+ '°F');
    $('.cel').css("opacity", "0.5");
    $('.far').css("opacity", "1");
    $('.far').css("color", "#fff");
    $(".far").prop("disabled", true);
    $(".cel").prop("disabled", false);
};
function getCelcius(){
    $("#temperature").html(Math.round((parseInt($("#temperature").text()) - 32)/ 1.8).toFixed(1) + '°C' );
    $('.far').css("opacity", "0.5");
    $('.cel').css("opacity", "1");
    $(".cel").prop("disabled", true);
    $(".far").prop("disabled", false);
}
