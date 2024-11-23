import "./main.css";

function Main() {
  return (
    <main className="mainContainer">
      {/* profile card */}
      <div className="profileContainer">
        <div className="profileCardContainer">
          <div className="badgeContainer">
            <img src="./images/no-touch.png" alt="noTouchIcon" />
            <img src="./images/Merchant-Navy.png" alt="badge" />
          </div>
          <div className="officerInfoContainer">
            <div className="officerDesignation">Second Officer</div>
            <div className="officerName">
              Abdul <br /> Ghani
            </div>
            <div className="officerID">Crew ID 86526</div>
          </div>
          <div className="activityContainer">
            <div className="lastActivity">My Last Activity</div>
            <p className="aboutActivity">
              Submitted the Deck Log for <br />
              <span className="highlight">1200-1600 Watch</span> at 08:16 UTC
            </p>
          </div>{" "}
        </div>
        <div className="shipInfoContainer">
          <div className="shipNameContainer">
            <img src="./images/cargo-ship.png" alt="cargoShip" />
            <div className="shipName">SGSIN-NOOSL</div>
          </div>
          <div>
            <div className="statementOfFact">Statement of Facts</div>
            <div className="currentStatus">Current Status</div>
          </div>
          <div className="cargoFirstLift">Cargo First Lift</div>
          <div className="shipNextTripDetail">
            <div>
              <div className="nextPort">Next Part Call</div>
              <div className="nextTripTime">INVTZ1</div>
            </div>
            <div>
              <div className="nextPort">ETA</div>
              <div className="nextTripTime">Nov 27,1450 UTC</div>
            </div>
          </div>
        </div>
      </div>
      {/* notificationCard */}
      <div className="notificationContainer">
        <div>
          <div className="dailyStreamContainer">
            <div>
              <div className="dailyStreamText">Daily Stream</div>
              <div className="lastUpdatedText">
                Last updated - 4 minutes ago
              </div>
            </div>
            <img src="./images/refreshing.png" alt="refreshingImage" />
          </div>
          <div className="importantNoticeCard">
            <div className="importantNoticeContainer">
              <div className="imprtNoticeText">Important Notice</div>
              <img src="./images/paperclip.png" alt="paperclipImage" />
            </div>
            <div className="noticeInfo">
              Caption's Bridge Order dated Nov 27,
              <br />
              2020
            </div>
            <div className="buttonContainer">
              <div className="views">
                <img src="./images/eye.png" alt="eyeImage" />
                <span>1</span>
              </div>
              <img src="./images/read-button.png" alt="readButton" />
            </div>
          </div>

          <div className="notificationCard">
            <div className="notificationInfo">
              <span className="noticeOfficerName">Second Officer Oliver </span>
              submitted the Deck Log for 1400-1500 watch hour and completed the
              Handover Checklist
            </div>
            <div className="notificationTime">UTC 1105 | LT +06:30</div>
          </div>

          <div className="notificationCard">
            <div className="notificationInfo">
              <span className="noticeOfficerName">Third Engineer Edward </span>
              submitted the Engine Log for 1200-1600 watch hour and completed
              the Handover Checklist
            </div>
            <div className="notificationTime">UTC 1105 | LT +06:30</div>
          </div>
        </div>
      </div>
      {/* todo section */}
      <div className="to-do-container">
        <div className="dayContainer">
          <div>
            <div className="myDayText">My Day</div>
            <div className="dateText">Tuesday,March 2</div>
          </div>
          <img src="./images/cloudy.png" alt="cloudyImage" />
        </div>
        <div className="taskCard">
          <div className="more">
            <img src="./images/more-horizontal.png" alt="moreImage" />
          </div>
          <div className="checkedContainer">
            <img src="./images/checked-filled.png" alt="checkedImage" />
            <div className="taskContainer">
              <div className="donedTask">Deck Log | 1200-1600 Watch</div>
              <div className="assignedByText">Assigned by Wayship</div>
            </div>
          </div>
        </div>
        <div className="taskCard red">
          <div className="more">
            <img src="./images/more-horizontal.png" alt="moreImage" />
          </div>
          <div className="checkedContainer ">
            <img src="./images/checked-inside.png" alt="unChecked" />
            <div>
              <div className="covidText">COVID19 Health Guidlines</div>
              <div className="assignedByText">
                Assigned by Technical | Due in 2 days
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="taskCard">
          <div className="more">
            <img src="./images/more-horizontal.png" alt="moreImage" />
          </div>
          <div className="checkedContainer">
            <img src="./images/checked-inside.png" alt="unChecked" />
            <div>
              <div className="todoTask">Steering Check</div>
              <div className="assignedByText">
                Assigned by Captain |{" "}
                <span className="dueText">Due in 2 hours</span>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="taskCard">
          <div className="more">
            <img src="./images/more-horizontal.png" alt="moreImage" />
          </div>
          <div className="checkedContainer">
            <img src="./images/checked-inside.png" alt="unChecked" />
            <div>
              <div className="todoTask">ECDIS Check</div>
              <div className="assignedByText">
                Assigned by Chief Officer | Due in 6 hours
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="taskCard">
          <div className="more">
            <img src="./images/more-horizontal.png" alt="moreImage" />
          </div>
          <div className="checkedContainer">
            <img src="./images/checked-inside.png" alt="unChecked" />
            <div>
              <div className="todoTask">Review Noon Report</div>
              <div className="assignedByText">
                Assigned by self | Due in 8 hours
              </div>
            </div>
          </div>
        </div>
        <div className="inputContainer">
          <img src="./images/plus.png" alt="addButton" />
          <input
            type="text"
            name="addTodo"
            id="todo"
            placeholder="Add a to-do reminder"
          />{" "}
        </div>
      </div>
    </main>
  );
}

export default Main;
