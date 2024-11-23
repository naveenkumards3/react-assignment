import "./SideBar.css";
function SideBar() {
  return (
    <aside className="container">
      <div className="home">
        <img src="/images/home.png" alt="homeIcon" />
        <div className="homeText">Home</div>
      </div>
      <div className="imageContainer">
        <img src="/images/layout.png" alt="layoutIcon" />
        <div className="text">Workspace</div>
      </div>
      <div className="imageContainer">
        <img src="/images/logbook.png" alt="logbookIcon" />
        <div className="text">MARPOL</div>
      </div>
      <div className="imageContainer">
        <img src="/images/heartbeat.png" alt="heartBeatIcon" />
        <div className="text">OH&S</div>
      </div>
      <div className="imageContainer">
        <img src="/images/pie-chart.png" alt="pieChartIcon" />
        <div className="text">Insights</div>
      </div>
      <div className="imageContainer">
        <img src="/images/time-and-date.png" alt="timeAndDateIcon" />
        <div className="text">History</div>
      </div>{" "}
      <div className="imageContainer">
        <img src="/images/Vector.png" alt="vectorIcon" />
        <div className="text">Apps</div>
      </div>{" "}
      <div className="imageContainer">
        <img src="/images/settings.png" alt="settingsIcon" />
        <div className="text">Settings</div>
      </div>
    </aside>
  );
}

export default SideBar;
