import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
//import L from "leaflet";
import * as L from "leaflet";
import "leaflet.heat";
//import { JsxElement } from "typescript";
//import { HeatLayer } from "leaflet.heat";

export function HeatMap({
    heatLocation
}: {
    heatLocation: L.HeatLatLngTuple[];
}): JSX.Element {
    const [points, setPoints] = useState<L.HeatLatLngTuple[]>(heatLocation);

    function updatePoints() {
        setPoints([...points]);
    }

    const map = useMap();
    useEffect(() => {
        /*const points: L.HeatLatLngTuple[] = [
            [-37.87, 175.475, 7],
            [-30, 90, 10]
        ];*/

        //L.heatLayer(test, { gradient: "Orange" }).addTo(map);
        L.heatLayer(points, {
            radius: 20,
            minOpacity: 10,
            maxZoom: 15,
            max: 20,
            blur: 10
            //gradient: "blur"
        }).addTo(map);
    }, []);
    return <div>Test</div>;
}

export function TestMap({
    heatLocation
}: {
    heatLocation: L.HeatLatLngTuple[];
}): JSX.Element {
    console.log("setting a new testmap!");
    const position: [number, number] = [51.505, -0.09];

    const [HeatMapState, SetHeatMapState] = useState<JSX.Element>(
        <HeatMap heatLocation={[]}></HeatMap>
    );

    function updateHeatMap() {
        SetHeatMapState(HeatMap({ heatLocation }));
    }

    return (
        <MapContainer
            id={"heat"}
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {HeatMapState}
            <Marker position={position}>
                <Popup>
                    Current Location <br />
                </Popup>
            </Marker>
        </MapContainer>
    );
}
