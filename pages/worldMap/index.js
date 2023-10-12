import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function WorldMap() {
  return (
    <main>
      <h1>World Map</h1>
      <div style={{ height: "100vh" }}>
        <MapView />
      </div>
    </main>
  );
}
