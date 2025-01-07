import { Map, View } from "ol";
import { defaults } from "ol/interaction";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import { OSM } from "ol/source";
import { useEffect, useRef } from "react";

const GenericMap = ({
  mapRef,
}: { mapRef: React.MutableRefObject<Map | null> }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new Map({
      target: mapContainerRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([2.213749, 46.227638]),
        zoom: 6,
      }),
      interactions: defaults({
        doubleClickZoom: false,
      }),
    });

    mapRef.current = map;

    return () => {
      mapRef.current?.setTarget(undefined);
      mapRef.current = null;
    };
  }, []);

  return <div ref={mapContainerRef} className="w-full h-full" />;
};

export default GenericMap;
