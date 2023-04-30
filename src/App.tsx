import React from "react";
import "./App.css";
import { ZipBar } from "./Components/ZipBar";
import { TestMap } from "./Components/TestMap";
import "leaflet/dist/leaflet.css";
import {
    TwitterTimelineEmbed,
    TwitterHashtagButton
} from "react-twitter-embed";
import { FloodPopUpZip } from "./Components/FloodPopUpZip";
import { FloodPopUp } from "./Components/FloodPopUp";

function App(): JSX.Element {
    return (
        <div className="App">
            <FloodPopUp></FloodPopUp>
            <header className="App-header">
                UD HenHacks- FLOOD WATCH
                <div className="ZipBar">
                    <ZipBar defaultZip="19717"></ZipBar>
                </div>
                <div className="HEATMAP">
                    <TestMap></TestMap>
                </div>
            </header>
            <header className="Flooding-popup">
                <FloodPopUpZip></FloodPopUpZip>
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
