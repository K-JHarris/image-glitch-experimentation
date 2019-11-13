import React from 'react';
import glitch from 'glitch-canvas';
import srcImage from '../images/lamb.png'

function MainContainer() {
  return (
    <div className="container">
      <h1>glitchJS</h1>
    </div>
  );
}

export default MainContainer;

var imagePath = srcImage;
//create container reference
var imgContainerEl = document.getElementById('img-container');
//set glitch parameters
var params = {
	amount:     30,
	iterations: 10,
	quality:    30,
	seed:       25
};


//invoke load image function, passing it imagePath as its source and the following function as its callback
loadImage(imagePath, function(img) {
    glitch(params) //pass in glitch parameters
      .fromImage(img) //expects an image from any source, input
      .toDataURL()//takes no parameters, returns a string with encoded image url
        //run a function that accepts our encoded image as an argument  
        .then( function(dataURL) { 
          var imageEl = new Image(); //functionally the same as document.createElement('img')
          imageEl.src = dataURL; //set source of newly created image to our encoded url
          imgContainerEl.appendChild(imageEl); //append image element into its container
        } );
  } 
);

//create function that creates an image in the DOM, sets its src and passes it to another function in a callback
function loadImage (src, callback) {
	var imageEl = new Image();
  imageEl.src = src;
	imageEl.onload = function () {
		callback(imageEl);
	};
}

// var image = new Image();

// image.onload = function () {
// 	glitch()
// 		.fromImage( image )
// 		.toDataURL()
// 		.then( function( dataURL ) {
// 			var glitchedImg = new Image();
//       glitchedImg.src = dataURL;
//       console.log(glitchedImg)
// 			document.body.appendChild( glitchedImg );
// 		} );
// };


// image.src= 'images/lamb.png';