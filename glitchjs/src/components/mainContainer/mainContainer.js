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

			var imgContainerEl = document.getElementById( 'img-container' );
			var canvasContainerEl = document.getElementById( 'canvas-container' );
			
			var params = {
				amount:     35,
				iterations: 20,
				quality:    30,
				seed:       25
			};

			loadImage( imagePath, function ( img ) {
				glitch( params )
					.fromImage( img )
					.toDataURL()
					.then( function( dataURL ) {
						var imageEl = new Image();
						imageEl.src = dataURL;
						imgContainerEl.appendChild( imageEl );
					} );

				glitch( params )
					.fromImage( img )
					.toImageData()
					.then( function( imageData ) {
						var canvasEl = document.createElement( 'canvas' );
						canvasEl.width = imageData.width;
						canvasEl.height = imageData.height;
						canvasEl.style.width = imageData.width + 'px';
						var ctx = canvasEl.getContext( '2d' );
						canvasContainerEl.appendChild( canvasEl );
						ctx.putImageData( imageData, 0, 0 );
					} );
			} );

			function loadImage ( src, callback ) {
				var imageEl = new Image();

				imageEl.onload = function () {
					callback( imageEl );
				};

        imageEl.src = src;
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