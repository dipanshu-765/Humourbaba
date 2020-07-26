import React from "react";
export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close} href="https://imgur.com/HsmHV6i">
      &times;
    </a>
    <div className="content">
      <form id="login-form">
          <h2 id="login-heading">Login to your Account</h2>
          <input id="login-username" placeholder="Enter Username"></input>
          <br></br><br></br>
          <input id="login-password" placeholder="Password" type="password"></input>
          <br></br><br></br><br></br><br></br>
          <button type="submit" id="login">Login</button>
      </form>
    </div>
  </div>
);
