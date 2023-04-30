import React from "react";
import "./App.css";
import { LandingPage } from "./Components/LandingPage";
import {
    TwitterTimelineEmbed,
    TwitterHashtagButton
} from "react-twitter-embed";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD HenHacks- FLOOD WATCH
                <div className="ZipBar">
                    <LandingPage defaultZip="19717"></LandingPage>
                </div>
            </header>
            <header className="Twitter-embedding">
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="DelawareEMA"
                    options={{ height: 400 }}
                />
                <TwitterHashtagButton
                    tag={"MyAnklesAreInWaterRn"}
                ></TwitterHashtagButton>
            </header>
        </div>
    );
}

export default App;
