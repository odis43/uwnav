"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("clicked");
    router.push("/map");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
      <div className="relative place-items-center">
        <div>
          <h1 className="font-bold text-5xl">Welcome to UWNAV</h1>
        </div>

        <button
          onClick={handleClick}
          className=" btn border-2 border-black mt-4"
        >
          Go
        </button>

        <div className="mt-24">
          <p>
            Still a work in progress, this current build is the MVP able to do
            path finding given 2 buildings. Next steps are in order of priority:
          </p>
          <l className="mt-4">
            <li>Building an interactive map with pathing</li>
            <li>
              Developing intermediary paths for any given path which includes
              details like stairwell usages and exit points that are not visable
              on the map
            </li>
            <li>Designing the UI for a cleaner UX</li>
          </l>
        </div>
      </div>
    </main>
  );
}
