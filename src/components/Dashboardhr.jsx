import React from "react";
import imgdb1 from "../Assists/dbadmin1.png";
import imgdb2 from "../Assists/dbadmin2.png";
import imgdb3 from "../Assists/dbadmin11.png";
import imgdb5 from "../Assists/dbadmin5.png";
import imgdb6 from "../Assists/dbadmin12.png";
import imgdb7 from "../Assists/setting.png";
import imgdb8 from "../Assists/search.png";
import imgdb9 from "../Assists/notification.png";
import imgdb10 from "../Assists/profile.png";
import imgdb11 from '../Assists/dbadmin13.png';
import imgdb12 from '../Assists/project.png'; 
import imgdb13 from '../Assists/events.png';
import imgdb15 from '../Assists/announcement.png';
import '../style/Dashboardhr.css';

function Dashboardhr(){
    return(
        <>
        <center>
        <div className="main1">
          <div className="sideleft">
            <div className="logo">LOGO PLACE</div>
            <div className="lptitle">HR</div>
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
                  <img src={imgdb5} alt="" width={18} />
                  <div className="optiontitle">Leaves</div>
                </div>
              </div>
              <div className="optionlist">
                <div className="options">
                  <img src={imgdb3} alt="" width={18} />
                  <div className="optiontitle">training Schedule</div>
                </div>
              </div>
              <div className="optionlist">
                <div className="options">
                  <img src={imgdb6} alt="" width={18} />
                  <div className="optiontitle">Assign Manager</div>
                </div>
              </div>
              <div className="optionlist">
                <div className="options">
                  <img src={imgdb11} alt="" width={18} />
                  <div className="optiontitle">Shifts</div>
                </div>
              </div>
              <div className="optionlist">
                <div className="options">
                  <img src={imgdb12} alt="" width={18} />
                  <div className="optiontitle">Projects</div>
                </div>
              </div>
              <div className="optionlist">
                <div className="options">
                  <img src={imgdb13} alt="" width={18} />
                  <div className="optiontitle">Events</div>
                </div>
              </div>
              <div className="optionlist">
                <div className="options">
                  <img src={imgdb15} alt="" width={18} />
                  <div className="optiontitle">Announcement</div>
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
                    <div className="dbboxtitle">Job View</div>
                  </div>
                  <div className="dbbox3">
                    <div className="dbboxtitle">Job Applied</div>
                  </div>
                  <div className="dbbox5">
                    <div className="dbboxtitle">Resigned Employees</div>
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

export default Dashboardhr;