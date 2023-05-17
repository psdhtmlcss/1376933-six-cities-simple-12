import { Offer, City } from 'types/offer';
import 'leaflet/dist/leaflet.css';
import { useRef, useState, useEffect } from 'react';
import useMap from 'hooks/useMap';

type MapScreenProps = {
  offers: Offer[];
  city: City;
}

export default function Map({offers, city}: MapScreenProps): JSX.Element {
  console.log(city);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return <section className="cities__map map" ref={mapRef}></section>;
}
