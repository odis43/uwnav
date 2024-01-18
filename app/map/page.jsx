"use client";
import React, { useState, Suspense, useEffect } from "react";
import getPath from "./getPath";

export default function Map() {
  const [data, setData] = useState([]);

  function handlePath(formData) {
    console.log("clicked");
    const fetchData = async () => {
      try {
        const nodeA = formData.get("A");
        const nodeB = formData.get("B");
        const result = await getPath(nodeA, nodeB);
        console.log(result.path);
        setData(result.path);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }

  return (
    <div>
      <form action={handlePath}>
        <div>
          <label>Start</label>
          <input className="border-2 border-black" name="A" />
        </div>

        <div>
          <label>End</label>
          <input className="border-2 border-black" name="B" />
        </div>
        <button className="cursor-pointer border-2 border-black" type="submit">
          Search
        </button>
      </form>
      <Suspense>
        <p className="justify-center">
          {data
            .map((item, index) => (index === 0 ? item : ` -> ${item}`))
            .join("")}
        </p>
      </Suspense>
    </div>
  );
}
