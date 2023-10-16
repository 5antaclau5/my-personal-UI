import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="Contactid">
      <div style={{ textAlign: "center" }} >
        <h2>Responsive Zig Zag Layout Example</h2>
        <p>Resize the browser window to see the effect.</p>
      </div>

      <div class="container">
        <div class="row">
          <div class="column-66">
            <h1 class="xlarge-font"><b>The App</b></h1>
            <h1 class="large-font" style={{ color: "MediumSeaGreen" }}><b>Why buy it?</b></h1>
            <p><span style={{ font: "36px" }}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button class="button">Download Application</button>
          </div>
          <div class="column-33">
            <img src="https://www.w3schools.com/w3images/img_app.jpg" width="335" height="471" />
          </div>
        </div>
      </div>

      <div class="container" style={{ backgroundColor: "#f1f1f1" }} >
        <div class="row">
          <div class="column-33">
            <img src="https://www.w3schools.com/w3images/app5.jpg" alt="App" width="335" height="471" />
          </div>
          <div class="column-66">
            <h1 class="xlarge-font"><b>Clarity</b></h1>
            <h1 class="large-font" style={{ color: "red" }}><b>Pixels, who?</b></h1>
            <p><span style={{ font: "24px" }}>A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            {/* <button class="button" style="background-color:red">Read More</button> */}
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="column-66">
            <h1 class="xlarge-font"><b>The App</b></h1>
            <h1 class="large-font" style={{ color: "MediumSeaGreen" }}><b>Why buy it?</b></h1>
            <p><span style={{ font: "36px" }} >Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <button class="button">Download Application</button>
          </div>
          <div class="column-33">
            <img src="https://www.w3schools.com/w3images/img_app.jpg" width="335" height="471" />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Contact;