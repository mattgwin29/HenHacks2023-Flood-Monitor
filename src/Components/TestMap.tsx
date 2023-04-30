import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
//import L from "leaflet";
import * as L from "leaflet";
import "leaflet.heat";
//import { JsxElement } from "typescript";
//import { HeatLayer } from "leaflet.heat";

export function HeatMap(): JSX.Element {
    const map = useMap();
    useEffect(() => {
        const points: L.HeatLatLngTuple[] = [
            [39.714812, -75.760116, 0],
            [39.703876, -75.755223, 0],
            [39.703462, -75.755074, 0],
            [39.704084, -75.756489, 0],
            [39.705677, -75.757377, 0],
            [39.683155, -75.751113, 0],
            [39.681729, -75.753594, 0],
            [39.682061, -75.757036, 0],
            [39.683069, -75.756228, 0],
            [39.681782, -75.752158, 0]
        ];

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

export function TestMap(): JSX.Element {
    const position: [number, number] = [39.685076, -75.754426];
    return (
        <MapContainer
            id={"heat"}
            center={[39.685076, -75.754426]}
            zoom={13}
            scrollWheelZoom={false}
        >
            {/*<HeatmapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={addressPoints}
                longitudeExtractor={(m) => m[1]}
                latitudeExtractor={(m) => m[0]}
                intensityExtractor={(m) => parseFloat(m[2])}
    />*/}

            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <HeatMap></HeatMap>
            <Marker position={position}>
                <Popup>
                    Current Location <br />
                </Popup>
            </Marker>
        </MapContainer>
    );
}
