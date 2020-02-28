import * as React from 'react';
import RecipeSectionHeader from './components/RecipeSectionHeader';
import RecipePickupPick from './components/RecipePickupPick/RecipePickupPick';
import RecipeOwnerInfo from './components/RecipeOwnerInfo/RecipeOwnerInfo';
import axios from 'axios';

interface RecipeReservationProps {
}

interface RecipeOwnerInfoState {
  name: string;
  phone: string;
  email: string;
  contactByPhone: boolean;
  contactBySMS: boolean;
  gdpr: boolean;
  errors: any;
}

interface RecipeReservationState {
  recipeCodesArray: Array<string>;
  recipeOwner: RecipeOwnerInfoState,
  note: string,
  pickupPlace: string;
}

class RecipeReservation extends React.Component<RecipeReservationProps, RecipeReservationState> {
  constructor(props: RecipeReservationProps) {
    super(props);

    this.state = {
      recipeCodesArray: [],
      recipeOwner: {
        name: '',
        phone: '',
        email: '',
        contactByPhone: false,
        contactBySMS: true,
        gdpr: false,
        errors: {}
      },
      note: '',
      pickupPlace: '',
    };
  }

  onSubmit = () => {
    const { recipeOwner, note, pickupPlace, recipeCodesArray} = this.state;
    axios.post('http://medicon.foxer360.com:3030/',
      {
        ...recipeOwner,
        pharmacy: pickupPlace,
        body: `eRecepty: ${recipeCodesArray.join(', ')}\n\n ${note}`
      }
    ).then(() => {
      //todo redirect
      console.log('sumbiting');
    }).catch(e => {
      alert('stala se chyba');
    });

  }
  updateRecipesArray = (recipeCodesArray: Array<string>) => {
    this.setState({ recipeCodesArray })
  }

  updatePickupPlace = (pickupPlace: string) => {
    this.setState({ pickupPlace });
  }

  updateOwnerInfo = (recipeOwner: RecipeOwnerInfoState) => {
    this.setState({ recipeOwner });
  }

  updateNote = (note: string) => {
    this.setState({ note });
  }

  render() {
    return (
      <div className="recipe-reservation-page">
        <RecipeSectionHeader
          updateNote={this.updateNote}
          note={this.state.note}
          recipesArray={this.state.recipeCodesArray}
          updateRecipesArray={this.updateRecipesArray}
        />
        <RecipePickupPick
          pickupPlace={this.state.pickupPlace}
          updatePickupPlace={this.updatePickupPlace}
        />
        <RecipeOwnerInfo
          owner={this.state.recipeOwner}
          updateMainComponent={this.updateOwnerInfo}
        />

        <section className="row recipe-owner-info submit-wrapper" style={{ textAlign: 'center', paddingBottom: 30, paddingTop: 0 }}>
          <button
            onClick={this.onSubmit}
            style={{ margin: 'auto' }}
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
