import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import campusStruct from "./campusStruct";
export default function MapChart() {
  return (
    <ComposableMap style={{ width: "60%" }}>
      <Geographies geography={campusStruct}>
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#FF5533"
                stroke="#000000"
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
