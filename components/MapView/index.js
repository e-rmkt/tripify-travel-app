import { useEffect, useRef } from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import useLeafletConfig from "@/hooks/useLeafletConfig";
import "leaflet/dist/leaflet.css";
import useSWR from "swr";
import { useRouter } from "next/router";
import L from "leaflet";
import Link from "next/link";

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;

const MAP_CONFIG = {
  center: [52.52, 13.405], // Berlin
  zoom: 4,
  scrollWheelZoom: false,
};
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DynamicMap() {
  useLeafletConfig();
  const router = useRouter();
  const { data: trips } = useSWR("/api/trips", fetcher);

  if (!trips) {
    return "loading";
  }

  return (
    <StyledMap>
      <MapContainer {...MAP_CONFIG}>
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">carto.com</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
          detectRetina={L.Browser.retina ? true : false}
        />
        {trips.map((trip) => (
          <Link key={trip._id} href={`/trip/${trip._id}`}>
            <Markers
              places={[
                {
                  _id: trip._id,
                  name: [
                    trip.title,
                    trip.location[0].city,
                    trip.location[0].country,
                  ],
                  coordinates: [
                    trip.location[0].latitude_city,
                    trip.location[0].longitude_city,
                  ],
                },
              ]}
              currentPlace={{}}
            ></Markers>
          </Link>
        ))}
      </MapContainer>
    </StyledMap>
  );
}

function Markers({ places = [], currentPlace }) {
  const map = useMap();
  const currentMarker = useRef(null);

  useEffect(() => {
    const targetPlace = places.find((x) => x._id === currentPlace?._id);
    if (!targetPlace) {
      map.closePopup();
      return;
    }
    map.flyTo(targetPlace.coordinates);
    setTimeout(() => currentMarker.current.openPopup(), 0);
  }, [places, currentPlace, map]);

  return (
    <>
      {places.map(({ _id, coordinates, name }) => (
        <Marker
          key={_id}
          position={coordinates}
          ref={_id === currentPlace?._id ? currentMarker : null}
        >
          <Popup>
            <h2>{name}</h2>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
