if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if ( typeof this !== "function") {
			// closest thing possible to the ECMAScript 5 internal IsCallable function
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
		    fToBind = this,
		    fNOP = function() {
		},
		    fBound = function() {
			return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
		};

		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();
		return fBound;
	};
};

function Tinkerforge() {
	this.IPConnection = require('vendor/tinkerforge/lib/IPConnection');
	this.BrickDC = require('vendor/tinkerforge/lib/BrickDC');
	this.BrickIMU = require('vendor/tinkerforge/lib/BrickIMU');
	this.BrickMaster = require('vendor/tinkerforge/lib/BrickMaster');
	this.BrickServo = require('vendor/tinkerforge/lib/BrickServo');
	this.BrickStepper = require('vendor/tinkerforge/lib/BrickStepper');
	this.BrickletAmbientLight = require('vendor/tinkerforge/lib/BrickletAmbientLight');
	this.BrickletAnalogIn = require('vendor/tinkerforge/lib/BrickletAnalogIn');
	this.BrickletAnalogOut = require('vendor/tinkerforge/lib/BrickletAnalogOut');
	this.BrickletBarometer = require('vendor/tinkerforge/lib/BrickletBarometer');
	this.BrickletColor = require('vendor/tinkerforge/lib/BrickletColor');
	this.BrickletCurrent12 = require('vendor/tinkerforge/lib/BrickletCurrent12');
	this.BrickletCurrent25 = require('vendor/tinkerforge/lib/BrickletCurrent25');
	this.BrickletDistanceIR = require('vendor/tinkerforge/lib/BrickletDistanceIR');
	this.BrickletDistanceUS = require('vendor/tinkerforge/lib/BrickletDistanceUS');
	this.BrickletDualButton = require('vendor/tinkerforge/lib/BrickletDualButton');
	this.BrickletDualRelay = require('vendor/tinkerforge/lib/BrickletDualRelay');
	this.BrickletGPS = require('vendor/tinkerforge/lib/BrickletGPS');
	this.BrickletHallEffect = require('vendor/tinkerforge/lib/BrickletHallEffect');
	this.BrickletHumidity = require('vendor/tinkerforge/lib/BrickletHumidity');
	this.BrickletIndustrialDigitalIn4 = require('vendor/tinkerforge/lib/BrickletIndustrialDigitalIn4');
	this.BrickletIndustrialDigitalOut4 = require('vendor/tinkerforge/lib/BrickletIndustrialDigitalOut4');
	this.BrickletIndustrialDual020mA = require('vendor/tinkerforge/lib/BrickletIndustrialDual020mA');
	this.BrickletIndustrialQuadRelay = require('vendor/tinkerforge/lib/BrickletIndustrialQuadRelay');
	this.BrickletIO16 = require('vendor/tinkerforge/lib/BrickletIO16');
	this.BrickletIO4 = require('vendor/tinkerforge/lib/BrickletIO4');
	this.BrickletJoystick = require('vendor/tinkerforge/lib/BrickletJoystick');
	this.BrickletLCD16x2 = require('vendor/tinkerforge/lib/BrickletLCD16x2');
	this.BrickletLCD20x4 = require('vendor/tinkerforge/lib/BrickletLCD20x4');
	this.BrickletLEDStrip = require('vendor/tinkerforge/lib/BrickletLEDStrip');
	this.BrickletLine = require('vendor/tinkerforge/lib/BrickletLine');
	this.BrickletLinearPoti = require('vendor/tinkerforge/lib/BrickletLinearPoti');
	this.BrickletMoisture = require('vendor/tinkerforge/lib/BrickletMoisture');
	this.BrickletMotionDetector = require('vendor/tinkerforge/lib/BrickletMotionDetector');
	this.BrickletMultiTouch = require('vendor/tinkerforge/lib/BrickletMultiTouch');
	this.BrickletNFCRFID = require('vendor/tinkerforge/lib/BrickletNFCRFID');
	this.BrickletPiezoBuzzer = require('vendor/tinkerforge/lib/BrickletPiezoBuzzer');
	this.BrickletPiezoSpeaker = require('vendor/tinkerforge/lib/BrickletPiezoSpeaker');
	this.BrickletPTC = require('vendor/tinkerforge/lib/BrickletPTC');
	this.BrickletRemoteSwitch = require('vendor/tinkerforge/lib/BrickletRemoteSwitch');
	this.BrickletRotaryEncoder = require('vendor/tinkerforge/lib/BrickletRotaryEncoder');
	this.BrickletRotaryPoti = require('vendor/tinkerforge/lib/BrickletRotaryPoti');
	this.BrickletSegmentDisplay4x7 = require('vendor/tinkerforge/lib/BrickletSegmentDisplay4x7');
	this.BrickletSolidStateRelay = require('vendor/tinkerforge/lib/BrickletSolidStateRelay');
	this.BrickletSoundIntensity = require('vendor/tinkerforge/lib/BrickletSoundIntensity');
	this.BrickletTemperature = require('vendor/tinkerforge/lib/BrickletTemperature');
	this.BrickletTemperatureIR = require('vendor/tinkerforge/lib/BrickletTemperatureIR');
	this.BrickletTilt = require('vendor/tinkerforge/lib/BrickletTilt');
	this.BrickletVoltage = require('vendor/tinkerforge/lib/BrickletVoltage');
	this.BrickletVoltageCurrent = require('vendor/tinkerforge/lib/BrickletVoltageCurrent');
}

module.exports = new Tinkerforge(); 