import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="mainContainer">
      <div>
        <SideBar></SideBar>
      </div>

      <div className="headerMainContainer">
        {" "}
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
