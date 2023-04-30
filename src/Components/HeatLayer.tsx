import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
//import L from "leaflet";
import * as L from "leaflet";
import "leaflet.heat";

/*const addressPoints: number[][] = [
    [-37.87, 175.475],
    [1, 2]
];*/
/*
const [points, setPoints] = useState<L.HeatLatLngTuple[]>([
    [-37.87, 175.475, 1]
]);*/

const [options, setoptions] = useState<L.HeatMapOptions>({
    radius: 20,
    minOpacity: 10,
    maxZoom: 15,
    max: 20,
    blur: 10,
    gradient: "blur"
});

export function SetHeatMap(): JSX.Element {
    useEffect(() => {
        const map = L.map("heat").setView([-37.87, 175.475], 12);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            //attribution = "&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors"
        }).addTo(map);

        /*const points = addressPoints.map((p) => {
                  return [p[0], p[1]];
              });
              */

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
            blur: 10,
            gradient: "blur"
        }).addTo(map);
    }, []);

    return <div id="heat" style={{ height: "100vh" }}></div>;
}
