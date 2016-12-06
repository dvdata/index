'use strict';

function MakeSpectrum(id, width, height, bands, volume) {

	/**
	 *    Turn an element into a virtual spectrum,
	 *    Ken Fyrstenberg Nilsen, Public domain.
	*/

	// init parent element
	var parent = document.getElementById(id),
		bandElements = [];
	
	if (typeof parent === 'undefined')
		alert('Element ' +id + ' not found!');
	
	parent.style.display = 'block';
	parent.style.width = width + 'px';
	parent.style.height = height + 'px';

	var bandValues = [],
		oldBandValues = [],
		bw = (((width)/ bands) |0),
		me = this;

	function calcBand(bandNum) {
		var bv = bandValues[bandNum],
			obv = oldBandValues[bandNum];

		if (bv >= obv) obv = bv;
		obv -= 0.1;
		if (obv < 0 ) obv = 0;
		obv *= volume;        
		
		oldBandValues[bandNum] = obv;
		return obv;
	}
	
	function getFFT(band) {
		band = band ? band : bandValues;
		for(var i = 0; i < bands; i++) {
			band[i] = Math.random();
	   }
	   //"BPM" to affect first bar
	   var d = (new Date()).getMilliseconds() % 10;
	   band[0] = band[0] * 0.2 + (d / 10) * 0.8;
	   if (bands > 1) band[1] = band[1] * 0.3 + (d / 10) * 0.7;
	   if (bands > 2) band[2] = band[2] * 0.5 + (d / 10) * 0.5;
	}    

	function createBands() {
	   
		var i, html = '';
		for(i = 0; i < bands; i++) {
			html += '<div id="' + id + '_band' + i + '" ';
			html += 'style="display:block;position:absolute;';
			html += 'left:' + ((i * bw + 1)|0);
			html += 'px;width:' + (bw - 2);
			html += 'px;height:0';
			html += 'px;" class="band"></div>';
		}
		parent.innerHTML = html;

		for(i = 0; i < bands; i++) {
			var el = document.getElementById(id + '_band' + i);
			bandElements.push(el);
		}
	}  

	this.createSnapshot = function() {
	
		var h, y, el;
		
		getFFT(bandValues);    
		
		for(var i = 0; i < bands; i++) {
			h = calcBand(i);
			el = bandElements[i].style;
			el.height =  ((height * h)|0) + 'px';
		}
	}  
	this.setVolume = function(vol) {
		
		if (arguments.length === 0)
			return volume;
 
		if (vol < 0) vol = 0;
		if (vol > 1) vol = 1;
		volume = vol;
	}

	//init bands
	getFFT(oldBandValues);
	createBands();
	me.setVolume(volume);

	//GO
	setInterval(me.createSnapshot, 100);
	
	return this;
}

