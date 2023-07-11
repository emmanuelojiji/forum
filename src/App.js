import "./App.scss";
import Card from "./Components/Card";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
import Footer from "./Components/Footer";
import Authentication from "./Components/Authentication";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [userSignedIn, setUserSignedIn] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUserSignedIn(true);
      // ...
    } else {
    }
  });

  return (
    <IonApp>
      <div className="global-wrap">
        {!userSignedIn && <Authentication setUserSignedIn={setUserSignedIn} />}

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
    </IonApp>
  );
}

export default App;
