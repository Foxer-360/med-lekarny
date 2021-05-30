import * as React from 'react';
import pharmaPlaces from '../../../RecipeReservation/components/pharmaPlaces';


interface RecipeReservationOutpostProps {
  place: any;
}

class RecipeReservationOutpost extends React.Component<RecipeReservationOutpostProps, {}> {
  constructor(props: RecipeReservationOutpostProps) {
    super(props);

    this.findPlace = this.findPlace.bind(this);
  }

  findPlace() {
    const id = this.props.place;
    return pharmaPlaces.filter((place: any) => {
      return place.id.toUpperCase() === id.toUpperCase();
    })[0];
  }

  render() {
    const place = this.findPlace();
    return (
      <div className="outpost-wrapper">
        <img
          className={'outpost-logo'}
          alt={'Medicon logo'}
          src={'/assets/mediconLekarny/images/logo.svg'}
        />
        <p className="address address-bold">{place.name}</p>
        <p className="address">{place.address1}</p>
        <p className="address">{place.address2}</p>
        <p className="address">{place.openHours1}</p>
        <p className="address">{place.openHours2}</p>
      </div>
    );
  }
}

export default RecipeReservationOutpost;
