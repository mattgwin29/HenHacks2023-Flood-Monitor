import React, { useState } from "react";
import "./App.css";
import { ZipBar } from "./Components/ZipBar";
import { TestMap } from "./Components/TestMap";
import { SetHeatMap } from "./Components/HeatLayer";
import "leaflet/dist/leaflet.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FloodPopUpZip } from "./Components/FloodPopUpZip";
import { FloodPopUp } from "./Components/FloodPopUp";
import * as L from "leaflet";

//function phony_refresh() {}

function App(): JSX.Element {
    const [heatLocation, setLocs] = useState<L.HeatLatLngTuple[]>([
        [-37.87, 175.475, 7]
    ]);

    function updateLocs() {
        setLocs([...heatLocation]);
    }

    const [TestMapState, SetTestMapState] = useState<JSX.Element>(
        <TestMap heatLocation={heatLocation}></TestMap>
    );

    function updateMap() {
        SetTestMapState({ ...TestMap({ heatLocation }) });
    }

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
                    <div className="heatMap">{TestMapState}</div>
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
