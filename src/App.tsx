import React from "react";
import "./App.css";
import { LandingPage } from "./Components/LandingPage";
import { TestMap } from "./Components/TestMap";
import "leaflet/dist/leaflet.css";
import {
    TwitterTimelineEmbed,
    TwitterHashtagButton
} from "react-twitter-embed";

function App(): JSX.Element {
    return (
        <div className="App">
            <div className="grid">
                <div className="navBar">
                    <LandingPage defaultZip="19717"></LandingPage>
                </div>
                <div className="mainContent">
                    <div className="floodBox"></div>
                    <div className="heatMap">
                        <TestMap></TestMap>
                    </div>
                </div>
                <div className="secondaryContent">
                    <div className="weatherBox"></div>
                    <div className="twitterBox">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="DelawareEMA"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
