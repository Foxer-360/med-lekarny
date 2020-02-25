import * as React from 'react';
import TextBlock from '../../../TextBlock';

interface iRecipeSectionheaderProps {
  recipesArray: Array<string>;
  updateRecipesArray: any;
}

interface iRecipeSectionheaderState {
  recipeCodeInput: string;
  errors: any;
}

class RecipeSectionHeader extends React.Component<iRecipeSectionheaderProps, iRecipeSectionheaderState> {
  private validationTable = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', '8', '9', '2', '3', '4', '5', '6', '7'
  ];

  private data = {
    title: 'Rezervace e-receptů',
    text: 'Rezervujte si léky z Vašeho receptu předem a ušetřete si dvojí cestu do lékárny! Stačí vyplnit kód Vašeho e-receptu nebo název Vašeho léku a my Vám dáme vědět, kdy budou Vaše léky připraveny k vyzvednutí. Můžete si zarezervovat i další volně prodejné přípravky.',
  };

  private translations = {
    code_invalid: 'Kód je neplatný.'
  };

  constructor(props: iRecipeSectionheaderProps) {
    super(props);

    this.state = {
      recipeCodeInput: '',
      errors: ''
    };

    this.recipeCodeInputChange = this.recipeCodeInputChange.bind(this);
  }

  setErrors = error => {
    this.setState({
      errors: { ...this.state.errors, ...error }
    });
  }

  recipeCodeInputChange(e: any) {
    const value = e.target && e.target.value;
    if (value !== null) {
      this.setState({recipeCodeInput: value});
    }
    const validCode = this.validateCode(value);
    if (validCode) {
      console.log('valid code updatni přes props state v main komponentě');
      this.recipeCodesArrayUpdate(value);
    }
    console.log('valid? value input change', validCode);
  }

  recipeCodesArrayUpdate(code: string) {
    let codesArray = this.props.recipesArray;
    this.setState({recipeCodeInput: ''});
    codesArray.push(code);
    this.props.updateRecipesArray(code);
  }

  validateCode = (code: string) => {
    const ereceiptCode = code.replace(/\W/gi, '').toUpperCase();
    if (ereceiptCode.length !== 12) {
      setTimeout(() => {
        this.setErrors({ code: this.translations.code_invalid });
      }, 1600);
    }

    let total = 0;
    for (let i = 0; i < ereceiptCode.length - 1; i++) {
      total += this.validationTable.indexOf(ereceiptCode[i]);
    }
    const validation = this.validationTable.indexOf(ereceiptCode[ereceiptCode.length - 1]) === total % 32;
    console.log('validation', validation);
    if (!validation) {
      setTimeout(() => { this.setErrors({ code: this.translations.code_invalid }); }, 800);
    } else {
      this.setErrors({ code: '' });
    }

    console.log('validation', validation, this.state.errors);
    return validation;

    // test code: PCIFF8GNBLOI
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!re.test(String(code).toLowerCase())) {
    //   setTimeout(() => this.setErrors({ code: 'code is invalid' }), 800);
    // } else {
    //   this.setErrors({ code: '' });
    // }
  }

  render() {
    const { recipesArray } = this.props;
    const { recipeCodeInput, errors } = this.state;
    const errorCodeBoolean = errors.code && errors.code.length > 0;

    return (
      <header className="recipe-header">
        <div className="container">
          <TextBlock data={this.data} />
          <section className="recipe-illustrations">
            <div className="row">
              <div className="col-4 ilu-column">
                <img
                  className={'recipe-ilu'}
                  alt={'receipt image'}
                  src={'/assets/mediconLekarny/images/recept-list.png'}
                />
                <span className="ilu-title">RECEPT</span>
              </div>
              <div className="col-4 ilu-column">
                <img
                  className={'recipe-ilu'}
                  alt={'receipt image'}
                  src={'/assets/mediconLekarny/images/recept-phone.png'}
                />
                <span className="ilu-title">SMS</span>
              </div>
              <div className="col-4 ilu-column">
                <img
                  className={'recipe-ilu'}
                  alt={'receipt image'}
                  src={'/assets/mediconLekarny/images/recept-pc.png'}
                />
                <span className="ilu-title">E-MAIL</span>
              </div>
            </div>
            <div className="row ilu-text">
              <p className="text text-center">
                Zde najdete identifikátor Vašeho receptu.
              </p>
              <p className="text text-center text-cursive">
                Jde o 12-místný alfanumerický kód, čárový kód, QR kód nebo odkaz ke stažení kódu.
              </p>
            </div>
          </section>

          <section className="recipe-input-wrapper">
            <h4 className="headline">Kód e-receptu</h4>
            <div className="form-wrapper">
              <input
                type="text"
                className={`recipe-input ${errorCodeBoolean ? 'error' : ''}`}
                placeholder="začněte psát"
                value={recipeCodeInput}
                onChange={this.recipeCodeInputChange}
              />

              <span className="center-word">nebo</span>
              <button className="recipe-btn">
                Nahrát foto
                <span className="plus-icon" />
              </button>
            </div>

            <section>
              REZERVACE RECEPTŮ S KÓDEM:
              {console.log('recipes', recipesArray)}
              {Array.isArray(recipesArray)
                && recipesArray.length > 0
                && recipesArray.map((recipe: string) => {
                  return <span key={`id${recipe}`}>{recipe} more</span>
                })
              }
              <br/>
              <br/>
              kod v inputu -> state v header komponentě {recipeCodeInput}
            </section>

            <form action="" className="reservation-note">
              <label className="textform-label">
                <span className="textform-label_text">Poznámka</span>
                <textarea name="note" className="recipe-input" />
              </label>
            </form>
          </section>
        </div>
      </header>
    );
  }
}

export default RecipeSectionHeader;
