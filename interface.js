$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#energy-usage').text(thermostat.energyUsage());

  $('#temperature-up').on('click', function(){
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature);
  });

  $('#power-saving').on('click', function(){
    thermostat.togglePowerSaving();
    $('#power-saving').text(thermostat.isPowerSaving);
  });

});
