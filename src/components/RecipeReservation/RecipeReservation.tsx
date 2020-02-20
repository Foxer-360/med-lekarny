import * as React from 'react';
import RecipeSectionHeader from './components/RecipeSectionHeader';
import RecipePickupPick from './components/RecipePickupPick/RecipePickupPick';
import RecipeOwnerInfo from './components/RecipeOwnerInfo/RecipeOwnerInfo';
import RecipeReservationSubmit from './components/RecipeReservationSubmit';

interface RecipeReservationProps {

}

interface RecipeReservationState {

}

class RecipeReservation extends React.Component<RecipeReservationProps, RecipeReservationState> {
  render() {
    return (
      <div className="recipe-reservation-page">
        <RecipeSectionHeader />
        <RecipePickupPick />
        <RecipeOwnerInfo />
        {/* <RecipeReservationSubmit /> */}
      </div>
    );
  }
}

export default RecipeReservation;
