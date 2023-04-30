import React, { useEffect, useState } from "react";
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
            [-37.87, 175.475, 7],
            [-30, 90, 10]
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
    const position: [number, number] = [51.505, -0.09];
    return (
        <MapContainer
            id={"heat"}
            center={[51.505, -0.09]}
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
