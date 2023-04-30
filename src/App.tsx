import React from "react";
import "./App.css";
import { LandingPage } from "./Components/LandingPage";
import { TestMap } from "./Components/TestMap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD HenHacks- FLOOD WATCH
                <div className="ZipBar">
                    <LandingPage defaultZip="19717"></LandingPage>
                    <TestMap></TestMap>
                </div>
            </header>
        </div>
    );
}

export default App;
