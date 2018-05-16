"use strict";

describe("Thermostat", function() {
  var thermostat
  const defaultTemperature = 20
  const incrementValue = 1
  const minimumTemperature = 10
  const maximumTemperature = 25

  beforeEach(function() {
    thermostat = new Thermostat()
  });

  describe("temperature", function() {
    it("starts at 20", function() {
      expect(thermostat.temperature).toEqual(defaultTemperature)
    });
  });

  describe("increaseTemperature", function() {
    it("increases the temperature by 1", function() {
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(defaultTemperature+incrementValue)
    });

    it("cannot go above maximum temperature", function() {
      thermostat.temperature = maximumTemperature
      expect(function() {
        thermostat.increaseTemperature()
      }).toThrowError("Maximum temperature reached")
    });
  });

  describe("decreaseTemperature", function() {
    it("decreases the temperature by 1", function() {
      thermostat.decreaseTemperature()
      expect(thermostat.temperature).toEqual(defaultTemperature-incrementValue)
    });

    it("cannot go below minimum temperature", function() {
      thermostat.temperature = minimumTemperature
      expect(function() {
        thermostat.decreaseTemperature()
      }).toThrowError("Minimum temperature reached")
    });
  });

  describe("isPowerSaving", function() {
    it("default is power saving mode is on", function() {
      expect(thermostat.isPowerSaving).toBeTruthy()
    });
  });

  describe("togglePowerSaving", function(){
    it("switches power saving to off", function(){
      thermostat.togglePowerSaving()
      expect(thermostat.isPowerSaving).toBeFalsy()
    });
    it("switches power saving mode to on", function(){
      thermostat.isPowerSaving = false
      thermostat.togglePowerSaving()
      expect(thermostat.isPowerSaving).toBeTruthy()
    });
  });

  describe("_maximumTemperature", function(){
    it("is 25 in power saving mode", function(){
      thermostat.isPowerSaving = true
      expect(thermostat._maximumTemperature()).toEqual(25)
    });
    it("is 32 if power saving mode is off", function(){
      thermostat.isPowerSaving = false
      expect(thermostat._maximumTemperature()).toEqual(32)
    });
  });
});
