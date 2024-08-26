import React from "react";
import img1 from "../Assists/image 3.png";
import img2 from "../Assists/image 1.png";

function Adminlogin() {
  return (
    <>
      <center>
        <div className="main">
          <div className="content1">
            <div className="info1">
              <img src={img2} alt="" className="logo" />
            </div>
            <div className="info2">
              <h2 className="desc1">Login To Your Account</h2>
              <p className="desc2">
                Doesn’t have an account yet? <a className="link">Contact now</a>
              </p>
            </div>
            <div className="info3">
              <form>
                <p className="para1">
                  <label for="emailid">Email</label>
                </p>
                <input type="email" id="emailid" required></input>
                <br />
                <p className="para1">
                  <label for="pswd">Password</label>
                </p>
                <input type="password" id="pswd" required></input>
                <br />
                <p className="para2">
                  <a className="fgpswd">Forget Password</a>
                </p>
                <button className="loginbtn">LOGIN</button>
              </form>
            </div>
          </div>

          <div className="content2">
            <img className="img" src={img1} alt="" />
          </div>
        </div>
      </center>
    </>
  );
}

export default Adminlogin;
