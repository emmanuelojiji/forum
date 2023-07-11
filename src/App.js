import "./App.scss";
import Card from "./Components/Card";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
import Footer from "./Components/Footer";
import Authentication from "./Components/Authentication";
import { IonApp } from "@ionic/react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  const [userSignedIn, setUserSignedIn] = useState();
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUserSignedIn(true);
      setLoading(false);
      // ...
    } else {
      setLoading(false);
    }
  });

  return (
    <BrowserRouter>
      {loading && <h1 className="loading">LOADING</h1>}
      <div className="global-wrap">
        {!userSignedIn && !loading && (
          <Authentication setUserSignedIn={setUserSignedIn} />
        )}

        {userSignedIn && (
          <div className="App-Sidebar-wrap">
            <Sidebar menuOpen={menuOpen} />
            <div className="App">
              <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="content">
                <Routes>
                  <Route
                    path="/profile"
                    element={
                      <Profile
                        userSignedIn={userSignedIn}
                        setUserSignedIn={setUserSignedIn}
                      />
                    }
                  />
                  <Route exact path="/" element={<Feed />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
