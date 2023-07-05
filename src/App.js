import "./App.scss";
import Card from "./Components/Card";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
import Footer from "./Components/Footer";
import { StatusBar, Style } from "@capacitor/status-bar";
import Authentication from "./Components/Authentication";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [userSignedIn, setUserSignedIn] = useState(true);

  return (
    <div className="global-wrap">
      {!userSignedIn && <Authentication />}

      {userSignedIn && (
        <div className="App-Sidebar-wrap">
          <Sidebar menuOpen={menuOpen} />
          <div className="App">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="content">
              <Feed />
            </div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
