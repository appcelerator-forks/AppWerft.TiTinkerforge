/* ***********************************************************
 * This file was automatically generated on 2014-08-11.      *
 *                                                           *
 * Bindings Version 2.0.2                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickletVoltage.DEVICE_IDENTIFIER = 218;
BrickletVoltage.CALLBACK_VOLTAGE = 13;
BrickletVoltage.CALLBACK_ANALOG_VALUE = 14;
BrickletVoltage.CALLBACK_VOLTAGE_REACHED = 15;
BrickletVoltage.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletVoltage.FUNCTION_GET_VOLTAGE = 1;
BrickletVoltage.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD = 3;
BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD = 4;
BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD = 7;
BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD = 8;
BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletVoltage.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletVoltage.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletVoltage.FUNCTION_GET_IDENTITY = 255;
BrickletVoltage.THRESHOLD_OPTION_OFF = 'x';
BrickletVoltage.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletVoltage.THRESHOLD_OPTION_INSIDE = 'i';
BrickletVoltage.THRESHOLD_OPTION_SMALLER = '<';
BrickletVoltage.THRESHOLD_OPTION_GREATER = '>';

function BrickletVoltage(uid, ipcon) {
	//Device for sensing Voltages between 0 and 50V

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletVoltage.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletVoltage.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.CALLBACK_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletVoltage.CALLBACK_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletVoltage.CALLBACK_VOLTAGE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletVoltage.CALLBACK_ANALOG_VALUE_REACHED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletVoltage.CALLBACK_VOLTAGE] = 'H';
	this.callbackFormats[BrickletVoltage.CALLBACK_ANALOG_VALUE] = 'H';
	this.callbackFormats[BrickletVoltage.CALLBACK_VOLTAGE_REACHED] = 'H';
	this.callbackFormats[BrickletVoltage.CALLBACK_ANALOG_VALUE_REACHED] = 'H';

	this.getVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the voltage of the sensor. The value is in mV and
		between 0mV and 50000mV.
		
		If you want to get the voltage periodically, it is recommended to use the
		callback :func:`Voltage` and set the period with 
		:func:`SetVoltageCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_VOLTAGE, [], '', 'H', returnCallback, errorCallback);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the value as read by a 12-bit analog-to-digital converter.
		The value is between 0 and 4095.
		
		.. note::
		 The value returned by :func:`GetVoltage` is averaged over several samples
		 to yield less noise, while :func:`GetAnalogValue` gives back raw
		 unfiltered analog values. The only reason to use :func:`GetAnalogValue` is,
		 if you need the full resolution of the analog-to-digital converter.
		
		If you want the analog value periodically, it is recommended to use the 
		callback :func:`AnalogValue` and set the period with 
		:func:`SetAnalogValueCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback);
	};
	this.setVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`Voltage` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`Voltage` is only triggered if the voltage has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getVoltageCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetVoltageCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :func:`AnalogValue` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		:func:`AnalogValue` is only triggered if the analog value has changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`SetAnalogValueCallbackPeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.setVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`VoltageReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback);
	};
	this.getVoltageCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetVoltageCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback);
	};
	this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :func:`AnalogValueReached` callback. 
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`SetAnalogValueCallbackThreshold`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :func:`VoltageReached`,
		* :func:`AnalogValueReached`
		
		are triggered, if the thresholds
		
		* :func:`SetVoltageCallbackThreshold`,
		* :func:`SetAnalogValueCallbackThreshold`
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`SetDebouncePeriod`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Bricklet is connected to, 
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position can be 'a', 'b', 'c' or 'd'.
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickletVoltage;
