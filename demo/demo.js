import React from 'react';
import ReactDOM from 'react-dom';
import ReactCrop from '../lib/ReactCrop.jsx';

/**
 * Select an image file.
 */
var imageType = /^image\//;
var fileInput = document.querySelector('#file-picker');

fileInput.addEventListener('change', function(e) {
	var file = e.target.files.item(0);

	if (!file || !imageType.test(file.type)) {
		return;
    }

    var reader = new FileReader();

	reader.onload = function(e) {
		loadEditView(e.target.result);
	};

	reader.readAsDataURL(file);
});

/**
 * Load the image in the crop editor.
 */
var cropEditor = document.querySelector('#crop-editor');

function loadEditView(dataUrl) {
	// Pass in with crop={crop}.
	var crop = {
		x: 35,
		y: 10,
		width: 20,
		height: 30,
		aspect: 16/9
	};
	ReactDOM.render(<ReactCrop crop={crop} src={dataUrl} onComplete={onCropComplete} />, cropEditor);
}

/**
 * On crop complete update the preview.
 */
function onCropComplete (crop) {
	// console.log('Crop move complete:', crop);
}