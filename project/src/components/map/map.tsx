import { Offer, City } from 'types/offer';
import {Marker, Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from 'hooks/useMap';

type MapScreenProps = {
  offers: Offer[];
  city: City;
  activeOffer: Offer | null;
}

export default function Map({offers, city, activeOffer}: MapScreenProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultMarker = new Icon({
    iconUrl: './img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 40],
  });

  const hoveredMarker = new Icon({
    iconUrl: './img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          activeOffer && activeOffer.id === offer.id ? hoveredMarker : defaultMarker
        ).addTo(map);

      });
    }
  }, [map, offers, activeOffer]);

  return <section className="cities__map map" ref={mapRef}></section>;
}
