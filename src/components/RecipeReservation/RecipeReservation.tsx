import * as React from 'react';
import RecipeSectionHeader from './components/RecipeSectionHeader';
import RecipePickupPick from './components/RecipePickupPick/RecipePickupPick';
import RecipeOwnerInfo from './components/RecipeOwnerInfo/RecipeOwnerInfo';
// import RecipeReservationSubmit from './components/RecipeReservationSubmit';

interface RecipeReservationProps {

}

interface RecipeReservationState {
  recipeCodesArray: Array<string>;
  pickupPlace: string;
}

class RecipeReservation extends React.Component<RecipeReservationProps, RecipeReservationState> {
  constructor(props: RecipeReservationProps) {
    super(props);

    this.state = {
      recipeCodesArray: [],
      pickupPlace: '',
    };

    this.updatePickupPlace = this.updatePickupPlace.bind(this);
  }

  updateRecipesArray(recipes: Array<string>) {
    console.log('update recipes array', recipes);
  }

  updatePickupPlace(placeId: string) {
    this.setState({pickupPlace: placeId});
  }

  render() {
    return (
      <div className="recipe-reservation-page">
        {console.log(this.state.recipeCodesArray)}
        <RecipeSectionHeader
          recipesArray={this.state.recipeCodesArray}
          updateRecipesArray={this.updateRecipesArray}
        />
        <RecipePickupPick
          updatePickupPlace={this.updatePickupPlace}
        />
        <RecipeOwnerInfo />
        {/* <RecipeReservationSubmit /> */}
      </div>
    );
  }
}

export default RecipeReservation;
