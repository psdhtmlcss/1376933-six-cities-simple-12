import React from 'react';
import {Helmet} from 'react-helmet-async';
import HiddenElements from '../../components/hidden-elements/hidden-elements';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import PlacesSort from '../../components/places-sort/places-sort';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer';

type MainScreenProps = {
  offers: Offer[];
}

export default function Main({offers}: MainScreenProps):JSX.Element {
  return (
    <React.Fragment>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <HiddenElements />
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <PlacesSort />
              <PlacesList offers={offers} />
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
