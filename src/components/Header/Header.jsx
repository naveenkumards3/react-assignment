import "./Header.css";
function Header() {
  return (
    <header className="headerContainer">
      <div className="shipContainer">
        <img src="/images/viking-ship.png" alt="viking-ship" />
        <div className="shipInfo">
          <div className="shipName">Dev Vessel</div>

          <div className="crew">
            16 Crewmates <span className="active">09 Active</span>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/Dropdown.png" alt="Dropdown" />
        <img
          className="buttonIconContainer"
          src="/images/ButtonIconLight.png"
          alt="ButtonIcon"
        />
      </div>
    </header>
  );
}

export default Header;
