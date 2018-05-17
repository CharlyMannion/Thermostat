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

  $.get('http:/api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6ad17e7426ddf72d0a8756bcec7b1981', function(data) {
    $('.weather').text(data["weather"][0]["description"]);
  });

});
