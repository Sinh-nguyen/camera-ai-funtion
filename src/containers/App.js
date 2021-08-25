// import './App.scss';
import Header from "./Header/Header";
import SideMenu from "./SideMenu/SideMenu";
import "./App.scss";
import UserPage from "./System/UserPage/UserPage";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Header />
      <div className="page-content">
        <UserPage />
      </div>
    </div>
  );
}

export default App;
