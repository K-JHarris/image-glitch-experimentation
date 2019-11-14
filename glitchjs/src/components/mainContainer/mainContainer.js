import React, { Component } from "react";
import glitch from "glitch-canvas";
import srcImage from "../images/lamb.png";
// import ReactDOM from "react-dom";

class MainContainer extends Component {
  state = {
    glitchImg: '',
    srcImage: srcImage,
    params: {
      amount: 83, //0 - 99
      iterations: 12, //0 - ~
      quality: 60, //0 - 99
      seed: 36 //0 - 99
    }
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('the component mounted.')
  }

  render() {
    function loadImage(src, callback) { //declare function that takes in an image source and a callback
      var imageEl = new Image(); //establish imageEl as a new image in the DOM
      imageEl.src = src; //set source of newly created image to source argument from function
      imageEl.onload = function() {//when image successfully loads, run the provided callback on the created image
        callback(imageEl);
      };
    };
    
    loadImage(this.state.imagePath, function(img) {//run function passing in image source from state and the following function as a callback to run on the image our function creates
      glitch(this.state.params) //pass in glitch parameters
        .fromImage(img) //expects an image from any source, input
        .toDataURL() //takes no parameters, returns a string with encoded image url
        .then(function(dataURL) {//run a function that accepts our encoded image as an argument
          console.log(dataURL);
          return dataURL;
          // var imageEl = new Image(); //functionally the same as document.createElement('img')
          // imageEl.src = dataURL; //set source of newly created image to our encoded url
        });
    });
    return (
      <div className="container">
        <h1>glitchJS</h1>
        <img src={this.state.srcImage}></img>
        <div id="targetDiv"></div>
      </div>
    );
  }
}
export default MainContainer;
