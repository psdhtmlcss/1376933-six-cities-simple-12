import PlaceCard from '../../components/place-card/place-card';
import { Offer } from '../../types/offer';

type PlacesListScreenProps = {
  offers: Offer[];
};

export default function PlacesList({offers}: PlacesListScreenProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id}/>)}
    </div>
  );
}
