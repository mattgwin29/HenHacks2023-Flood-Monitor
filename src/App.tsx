import React from "react";
import "./App.css";
import { ZipBar } from "./Components/ZipBar";
import { TestMap } from "./Components/TestMap";
import "leaflet/dist/leaflet.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FloodPopUpZip } from "./Components/FloodPopUpZip";
import { FloodPopUp } from "./Components/FloodPopUp";

function App(): JSX.Element {
    return (
        <div className="App">
            <FloodPopUp></FloodPopUp>
            <div className="grid">
                <div className="pageTitle">
                    <h2>Flood Watch</h2>
                </div>
                <div className="zipBox">
                    <ZipBar defaultZip="19717"></ZipBar>
                </div>
                <div className="mainContent">
                    <div className="floodBox">
                        <FloodPopUpZip></FloodPopUpZip>
                    </div>
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
