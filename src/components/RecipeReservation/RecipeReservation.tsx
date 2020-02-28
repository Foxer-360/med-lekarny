import * as React from 'react';
import RecipeSectionHeader from './components/RecipeSectionHeader';
import RecipePickupPick from './components/RecipePickupPick/RecipePickupPick';
import RecipeOwnerInfo from './components/RecipeOwnerInfo/RecipeOwnerInfo';

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
    this.updateOwnerInfo = this.updateOwnerInfo.bind(this);
  }

  updateRecipesArray(recipes: Array<string>) {
    console.log('update recipes array', recipes);
  }

  updatePickupPlace(placeId: string) {
    this.setState({pickupPlace: placeId});
  }

  updateOwnerInfo(info: any) {
    console.log('main component', info);
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
        <RecipeOwnerInfo
          updateMainComponent={this.updateOwnerInfo}
        />

        <section className="row recipe-owner-info submit-wrapper">
          <button
            type="button"
            className="btn recipe-btn submit-btn"
          >
            Odeslat rezervaci
          </button>
        </section>

      </div>
    );
  }
}

export default RecipeReservation;
