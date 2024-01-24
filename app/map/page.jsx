"use client";
import React, { useState, Suspense, useEffect } from "react";
import getPath from "./getPath";
import MapChart from "./graph";
import Image from "next/image";
import { tunnels } from "/public/images/tunnels.jpeg";

export default function Map() {
  const [path, setPath] = useState([]);
  const [len, setLen] = useState();

  function handlePath(formData) {
    const fetchData = async () => {
      try {
        const nodeA = formData.get("A");
        const nodeB = formData.get("B");
        const result = await getPath(nodeA, nodeB);
        setPath(result.path);
        setLen(result.len);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full h-full bg-white">
      <form action={handlePath} className="mt-32">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 ">
              Destination Finder
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Please provide the starting and ending points for your travel
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Start
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="A"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-2 border-black py-1.5 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  End
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="B"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-2 border-black py-1.5 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <button type="submit" className="btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>

      <Suspense>
        <p className="justify-center text-black">
          {path
            .map((item, index) => (index === 0 ? item : ` -> ${item}`))
            .join("")}
        </p>
        <p className="text-black">{len}</p>
      </Suspense>
      <Image
        src="/images/tunnels.jpeg"
        width={600}
        height={200}
        alt="Tunnels"
      />
    </main>
  );
}
