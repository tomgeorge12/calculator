import React, { Component } from 'react';
import logo from './Circle-calc.png';
import './App.css';
// import Calculator from './containers/calculatorMain';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.onUpload = this.onUpload.bind(this);
    this.onUpload2 = this.onUpload2.bind(this);
    this.processImage = this.processImage.bind(this);
  }

  onUpload () {
    let targetImage = document.getElementById('output');
    let uploadedImage = document.getElementById('file');
    targetImage.src = URL.createObjectURL(uploadedImage.files[0])
  }
  onUpload2 () {
    let targetImage = document.getElementById('output2');
    let uploadedImage = document.getElementById('file2');
    targetImage.src = URL.createObjectURL(uploadedImage.files[0])
  }
  processImage() {
    let main = document.getElementById('output');
    let rest = document.getElementById('output2');
    main.textContentyy = rest;
    let resultImage = document.getElementById('imageout');
    resultImage.src = main;
    // var canvas = document.createElement("canvas");
    // canvas.width = main.width;
    // canvas.height = main.height;
  
    // var ctx = canvas.getContext("2d");
    // ctx.drawImage(main, 0, 0);
  
    // for (var i = 0; i < rest.length; i++) {
    //   var img = rest[i];
    //   ctx.drawImage(img, img.getAttribute("data-posx"), img.getAttribute("data-posy"));
    // }
    // let resultImage = document.getElementById('imageout');
    // resultImage.src = canvas.toDataURL("image/png");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CalculatoR</h2>
        </div>
        {/* <div className="container cal-container">
          <Calculator/>
        </div> */}
        <div>
          <input type="file"  accept="image/*" name="image" id="file"/>
        </div>
        <img id='output' width="200" />
        <button onClick={this.onUpload} >{"upload"}</button>
        <div>
          <input type="file"  accept="image/*" name="image" id="file2"/>
        </div>
        <img id='output2' width="200" />
        <button onClick={this.onUpload2} >{"upload2"}</button>
        <img id='imageout' width="200" />
        <button onClick={this.processImage} >{"PROCESS"}</button>
      </div>
    );
  }
}

export default App;
