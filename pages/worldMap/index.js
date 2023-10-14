import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { BackButton } from "@/components/Layout/Layout.styled";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function WorldMap() {
  const router = useRouter();
  return (
    <main>
      <h1>World Map</h1>
      <BackButton onClick={() => router.back()}>← back</BackButton>
      <div style={{ height: "100vh" }}>
        <MapView />
      </div>
    </main>
  );
}
