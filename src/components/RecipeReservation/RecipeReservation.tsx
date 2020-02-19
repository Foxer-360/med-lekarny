import * as React from 'react';
import RecipeSectionHeader from './components/RecipeSectionHeader';

interface Props {

}

class RecipeReservation extends React.Component<Props> {
  render() {
    return (
      <div className="recipe-reservation-page">
        <RecipeSectionHeader />
      </div>
    );
  }
}

export default RecipeReservation;
