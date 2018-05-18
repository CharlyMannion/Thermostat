function UpdateUi(thermostat){

  $('#temperature').text(thermostat.temperature);
  $('#energy-usage').text(thermostat.energyUsage());

  var usage = thermostat.energyUsage();
  var cssUsage;

  if(usage === 'low-usage') {
    cssUsage = 'low-usage';
  } else if (usage === 'medium-usage') {
    cssUsage = 'medium-usage';
  } else {
    cssUsage = 'high-usage';
  }

  var powerSaving = thermostat.isPowerSaving;
  var cssPowerSaving;

  if(powerSaving === true) {
    cssPowerSaving = 'on';
  } else {
    cssPowerSaving = 'off';
  }

$('#temperature').attr('class', cssUsage);
$('#power-saving').attr('class', cssPowerSaving);

}


$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#energy-usage').text(thermostat.energyUsage());

  $('#temperature-up').on('click', function(){
    thermostat.increaseTemperature();
    UpdateUi(thermostat);
  });

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemperature();
    UpdateUi(thermostat);
  });

  $('#temperature-reset').on('click', function(){
    $('#energy-usage').text(thermostat.energyUsage());
    thermostat.resetTemperature();
    UpdateUi(thermostat);
  });

  $('#power-saving').on('click', function(){
    var output
    thermostat.togglePowerSaving();
    if(thermostat.isPowerSaving === true) {
      output = "ECO :)"
    }else {
      output = "Murder the Bees"
    }
    $('#power-saving').text(output);
    UpdateUi(thermostat);
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=6ad17e7426ddf72d0a8756bcec7b1981&units=metric', function(data) {
      $('.weather').text(data["weather"][0]["description"]);
      $('.temperature').text(data.main.temp);
    });
  });


});
