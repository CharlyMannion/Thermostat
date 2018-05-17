$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#energy-usage').text(thermostat.energyUsage());

  $('#temperature-up').on('click', function(){
    thermostat.increaseTemperature();
    $('#energy-usage').text(thermostat.energyUsage());
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemperature();
    $('#energy-usage').text(thermostat.energyUsage());
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-reset').on('click', function(){
    $('#energy-usage').text(thermostat.energyUsage());
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature);
  });

  $('#power-saving').on('click', function(){
    thermostat.togglePowerSaving();
    $('#power-saving').text(thermostat.isPowerSaving);
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=6ad17e7426ddf72d0a8756bcec7b1981&units=metric', function(data) {
      $('.weather').text(data["weather"][0]["description"]);
    });
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=6ad17e7426ddf72d0a8756bcec7b1981&units=metric', function(data) {
      $('.temperature').text(data.main.temp);
    });
  });

  // displayWeather('London');
  //
  // $('#select-city').submit(function(event) {
  //   event.preventDefault();
  //   var city = $('#current-city').val();
  //   displayWeather(city);
  // });
  //
  // function displayWeather(city) {
  //     var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  //     var token = '&APPID=6ad17e7426ddf72d0a8756bcec7b1981';
  //     var units = '&units=metric';
  //     $.get(url + token + units, function(data) {
  //       $('.temperature').text(data.main.temp);
  //     });
  //     $.get(url + token + units, function(data) {
  //       $('.weather').text(data["weather"][0]["description"]);
  //     });
  //   };

});
