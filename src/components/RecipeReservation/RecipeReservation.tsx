import * as React from 'react';
import RecipeSectionHeader from './components/RecipeSectionHeader';
import RecipePickupPick from './components/RecipePickupPick/RecipePickupPick';
import RecipeOwnerInfo from './components/RecipeOwnerInfo/RecipeOwnerInfo';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as queryString from 'query-string';

interface RecipeReservationProps {
  data: {
    headline: string;
    text: string;
    step1: string;
    step2: string;
    step3: string;
    url?: LooseObject;
  };
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
  recipeOwner: RecipeOwnerInfoState;
  note: string;
  pickupPlace: string;
  files: any[];
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
      files: [],
    };
  }

  onSubmit = () => {
    const { recipeOwner, note, pickupPlace, recipeCodesArray, files } = this.state;

    const form = new FormData();
    form.set('file', files[0]);
    form.set('pharmacy', pickupPlace);
    form.set('body', `eRecepty: ${recipeCodesArray.join(', ')}\n\n ${note}`);
    Object.keys(recipeOwner).forEach(key => form.set(key, recipeOwner[key]));

    axios({
      method: 'post',
      url: 'http://localhost:3030/',
      // url: 'http://medicon.foxer360.com:3030/',
      data: form,
      headers: {'Content-Type': 'multipart/form-data' },
    })
      // .post('http://localhost:3030/', {
      //   ...recipeOwner,
      //   pharmacy: pickupPlace,
      //   body: `eRecepty: ${recipeCodesArray.join(', ')}\n\n ${note}`,
      // })
      .then(() => {
        //todo redirect
        console.log('sumbiting');
      })
      .catch(e => {
        alert('Stala se chyba.');
      });
  }

  onLoadFileHandler = (e) => {
    const { files } = e.target;
    this.setState({ files: Array.from(files) });
  }

  updateRecipesArray = (recipeCodesArray: Array<string>) => {
    this.setState({ recipeCodesArray });
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

  buildSearchQuery() {
    const codes = this.state.recipeCodesArray;
    const place = this.state.pickupPlace;
    const searchQueryWithCodes = queryString.stringify({codes: codes}, {arrayFormat: 'bracket'});
    const searchQueryWithPlace = queryString.stringify({place: place});
    const searchQuery = `?${searchQueryWithCodes}&${searchQueryWithPlace}`;
    return searchQuery;
  }

  render() {
    const boData = this.props.data;

    return (
      <div className="recipe-reservation-page">
        <RecipeSectionHeader
          updateNote={this.updateNote}
          note={this.state.note}
          recipesArray={this.state.recipeCodesArray}
          updateRecipesArray={this.updateRecipesArray}
          boData={boData}
          onLoadFileHandler={this.onLoadFileHandler}
        />
        <RecipePickupPick
          pickupPlace={this.state.pickupPlace}
          updatePickupPlace={this.updatePickupPlace}
        />
        <RecipeOwnerInfo
          owner={this.state.recipeOwner}
          updateMainComponent={this.updateOwnerInfo}
        />

        <section className="row recipe-owner-info submit-wrapper">
          <Link
            onClick={this.onSubmit}
            style={{ margin: 'auto' }}
            type="button"
            className="btn recipe-btn submit-btn"
            to={`${boData.url && boData.url.url}${this.buildSearchQuery()}`}
          >
            Odeslat rezervaci
          </Link>
        </section>

      </div>
    );
  }
}

export default RecipeReservation;
