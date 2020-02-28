import * as React from 'react';
import RecipeSectionHeader from './components/RecipeSectionHeader';
import RecipePickupPick from './components/RecipePickupPick/RecipePickupPick';
import RecipeOwnerInfo from './components/RecipeOwnerInfo/RecipeOwnerInfo';
import { Redirect } from 'react-router-dom';
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
    submitBtnText: string;
  };
}

interface RecipeOwnerInfoState {
  name: string;
  phone: string;
  email: string;
  contactByEmail: boolean;
  contactBySMS: boolean;
  gdpr: boolean;
}

interface RecipeReservationState {
  recipeCodesArray: Array<string>;
  recipeOwner: RecipeOwnerInfoState;
  note: string;
  pickupPlace: string;
  files: any[];
  errors: any;
}

class RecipeReservation extends React.Component<RecipeReservationProps, RecipeReservationState> {
  private timeout = null;
  constructor(props: RecipeReservationProps) {
    super(props);

    this.state = {
      recipeCodesArray: [],
      recipeOwner: {
        name: '',
        phone: '',
        email: '',
        contactByEmail: false,
        contactBySMS: true,
        gdpr: false
      },
      note: '',
      pickupPlace: '',
      files: [],
      errors: {
        pickupPlace: null,
        name: null,
        phone: null,
        email: null,
      }
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
        // todo redirect
        console.log('sumbiting');
        return (
          <Redirect
            to={`${this.props.data
            && this.props.data.url
            && this.props.data.url.url}${this.buildSearchQuery()}`}
          />);
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

  buildSearchQuery = () => {
    const codes = this.state.recipeCodesArray;
    const place = this.state.pickupPlace;
    const searchQueryWithCodes = queryString.stringify({codes: codes}, {arrayFormat: 'bracket'});
    const searchQueryWithPlace = queryString.stringify({place: place});
    const searchQuery = `?${searchQueryWithCodes}&${searchQueryWithPlace}`;
    return searchQuery;
  }

  requiredInputs = () => {
    const { files, recipeCodesArray, pickupPlace, recipeOwner } = this.state;
    const { name, phone, email, contactByEmail, contactBySMS, gdpr } = recipeOwner;
    if ( recipeCodesArray.length < 1 || files.length < 1 ) {
      return false;
    }
    if ( pickupPlace === '' ) {
      return false;
    }
    const ownerInfo = name && name.length > 0
                        && phone && phone.length > 0
                        && email && email.length > 0
                        && ( contactByEmail || contactBySMS )
                        && gdpr;
    if ( ownerInfo ) {
      return true;
    }
  }

  setErrors = error => {
    this.setState({
      errors: { ...this.state.errors, ...error }
    });
  }

  validateName = (name: string) => {
    if (name.length < 5) {
      this.setErrors({name: 'Jméno musí být vyplněno'});
    } else {
      this.setErrors({name: ''});
    }
  }

  validatePhone = (phone: string) => {
    const reg = /^\d+$/;
    if (reg.test(phone)) {
      this.setErrors({phone: ''});
    } else {
      this.setErrors({phone: 'Vyplňte prosím telefoní číslo (formát: XXX XXX XXX)'});
    }
  }

  validateEmail = (email: string) => {
    // tslint:disable-next-line: max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      this.setErrors({email: ''});
    } else {
      this.setErrors({email: 'Zkontrolujte si prosím zda jste správně vyplnili e-mail.'});
    }
  }

  isFormValid = () => {
    const er = this.state.errors;
    const codesBoolean = this.requiredInputs();
    return codesBoolean && Object.keys(er).reduce((acc, field) => acc && !er[field], true);
  }

  validateOwner = (fieldName, value) => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      switch (fieldName[0]) {
        case 'name': this.validateName(value); break;
        case 'phone': this.validatePhone(value); break;
        case 'email': this.validateEmail(value); break;
        default: return null;
      }
    }, 400);
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
          boData={boData}
          updatePickupPlace={this.updatePickupPlace}
        />
        <RecipeOwnerInfo
          owner={this.state.recipeOwner}
          boData={boData}
          updateMainComponent={this.updateOwnerInfo}
          errors={this.state.errors}
          validateOwner={this.validateOwner}
        />
        <section className="row recipe-owner-info submit-wrapper">
          {this.isFormValid()
            ? <button
                onClick={this.onSubmit}
                type="button"
                className="btn recipe-btn submit-btn"
            >
              Odeslat rezervaci
            </button>
            : <button
                className="btn recipe-btn submit-btn disabled"
                disabled={true}
            >
              {boData.submitBtnText}
            </button>
          }
        </section>

      </div>
    );
  }
}

export default RecipeReservation;
