import React from "react";
import imgdb1 from "../Assists/dbadmin1.png";
import imgdb2 from "../Assists/dbadmin2.png";
import imgdb3 from "../Assists/dbadmin3.png";
import imgdb5 from "../Assists/dbadmin5.png";
import imgdb6 from "../Assists/dbadmin6.png";
import imgdb7 from "../Assists/setting.png";
import imgdb8 from "../Assists/search.png";
import imgdb9 from "../Assists/notification.png";
import imgdb10 from "../Assists/profile.png";

function Dashboardadmin() {
  return (
    <>
      <center>
        <div className="main1">
          <div className="sideleft">
            <div className="logo">LOGO PLACE</div>
            <div className="lptitle">Admin</div>
            <div className="lpoptions">
              <div className="optionlist">
                <div className="options">
                  <img src={imgdb1} alt="" width={18} />
                  <div className="optiontitle">Dashboard</div>
                </div>
              </div>
              <div className="optionlist">
                <div className="options">
                  <img src={imgdb2} alt="" width={18} />
                  <div className="optiontitle">Projects</div>
                </div>
              </div>
              <div className="optionlist">
                <div className="options">
                  <img src={imgdb3} alt="" width={18} />
                  <div className="optiontitle">Account</div>
                </div>
              </div>
              <div className="optionlist">
                <div className="options">
                  <img src={imgdb5} alt="" width={18} />
                  <div className="optiontitle">Leaves</div>
                </div>
              </div>
              <div className="optionlist">
                <div className="options">
                  <img src={imgdb6} alt="" width={18} />
                  <div className="optiontitle">Departments</div>
                </div>
              </div>
            </div>
            <div className="lpsetting">
              <img src={imgdb7} alt="" width={18} />
              <div className="optiontitle">Setting</div>
            </div>
          </div>
          <div className="sideright">
            <center>
              <div className="profile">
                <div className="userdetail">
                    <div className="userheading">
                        Good Morning, <a className="username">Priyanshu</a>
                    </div>
                    <div className="userpara">
                        Your overview is here
                    </div>
                </div>
                <div className="profiledetail">
                  <div className="profilebox">
                    <img src={imgdb8} alt="" width={18} height={18} />
                  </div>
                  <div className="profilebox">
                    <img src={imgdb9} alt="" width={18} height={18} />
                  </div>
                  <div className="profilebox">
                    <img src={imgdb10} alt="" width={18} height={18} />
                  </div>
                </div>
              </div>
              <div className="detail">
                <div className="pagetitle">Dashboard</div>
                <div className="outerbox1">
                  <div className="dbbox1">
                    <div className="dbboxtitle">Total Employees</div>
                  </div>
                  <div className="dbbox2">
                    <div className="dbboxtitle">Total Departments</div>
                  </div>
                  <div className="dbbox3">
                    <div className="dbboxtitle">Total Projects</div>
                  </div>
                  <div className="dbbox5">
                    <div className="dbboxtitle">Total Events</div>
                  </div>
                </div>
                <center>
                  <div className="outerbox2"></div>
                </center>
              </div>
            </center>
          </div>
        </div>
      </center>
    </>
  );
}

export default Dashboardadmin;
