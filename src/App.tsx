import React from "react";
import "./App.css";
import { LandingPage } from "./Components/LandingPage";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD HenHacks- FLOOD WATCH
                <div className="ZipBar">
                    <LandingPage defaultZip="19717"></LandingPage>
                </div>
            </header>
        </div>
    );
}

export default App;
