import { useRef } from "react";
import { Map } from "ol";
import GenericMap from "../components/common/Map/GenericMap";

const MapPage = () => {
  const mapRef = useRef<Map | null>(null);
  return (
    <div>
      <h1 className="text-4xl font-bold">Map</h1>
      <div className="mt-4">
        <div className="w-full h-[650px]">
          <GenericMap mapRef={mapRef} />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
