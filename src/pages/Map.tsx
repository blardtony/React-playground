import { useEffect, useRef } from "react";
import { Feature, Map, MapBrowserEvent } from "ol";
import GenericMap from "../components/common/Map/GenericMap";
import { ContextMenu } from "primereact/contextmenu";
import { Point } from "ol/geom";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import CircleStyle from "ol/style/Circle";
interface RightClick {
  coordinate: [number, number];
}
const MapPage = () => {
  const mapRef = useRef<Map | null>(null);
  const contextMenuRef = useRef<ContextMenu | null>(null);
  const rightClickRef = useRef<RightClick | null>(null);

  useEffect(() => {
    if (!contextMenuRef.current) return;
    mapRef.current?.on("contextmenu" as any, (e: MapBrowserEvent<any>) => {
      e.preventDefault();
      contextMenuRef.current?.show(e.originalEvent);
      rightClickRef.current = {
        coordinate: [e.coordinate[0], e.coordinate[1]],
      };
      console.log(e.coordinate);
    });
  });

  const addMarker = () => {
    if (!mapRef.current) return;

    const marker = new Feature({
      geometry: new Point([
        rightClickRef.current?.coordinate[0] ?? 0,
        rightClickRef.current?.coordinate[1] ?? 0,
      ]),
      name: "Marker",
    });

    const vectorSource = new VectorSource();
    vectorSource.addFeature(marker);

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new CircleStyle({
          radius: 5,
          fill: new Fill({ color: "red" }),
          stroke: new Stroke({ color: "black", width: 1 }),
        }),
      }),
    });

    vectorLayer.setZIndex(2);

    mapRef.current.addLayer(vectorLayer);
  };
  return (
    <div>
      <h1 className="text-4xl font-bold">Map</h1>
      <div className="mt-4">
        <div className="w-full h-[650px]">
          <ContextMenu
            model={[
              {
                label: "Add point",
                command: () => {
                  addMarker();
                },
              },
            ]}
            ref={contextMenuRef}
          />
          <GenericMap mapRef={mapRef} />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
