import * as React from 'react';
import pharmaPlaces from '../../../RecipeReservation/components/pharmaPlaces';


interface RecipeReservationOutpostProps {
  place: any;
}

class RecipeReservationOutpost extends React.Component<RecipeReservationOutpostProps, {}> {
  render() {

    console.log('place v kompo', this.props.place, pharmaPlaces);

    return (
      <div className="outpost-wrapper">
        <img
          className={'outpost-logo'}
          alt={'Medicon logo'}
          src={'/assets/mediconLekarny/images/logo.svg'}
        />
        <p className="address address-bold">A. Staška 1670/80</p>
        <p className="address">Praha 4</p>
        <p className="address">140 00</p>
        <p className="address">po-pá: 8-19, so: 10-18</p>
      </div>
    );
  }
}

export default RecipeReservationOutpost;
