import { useEffect, useState, MutableRefObject, useRef } from 'react';
import {Map, TileLayer} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from 'types/offer';


export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedMap = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current && !isRenderedMap.current) {

      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderedMap.current = true;
    }
  }, [mapRef, city]);

  return map;
}
