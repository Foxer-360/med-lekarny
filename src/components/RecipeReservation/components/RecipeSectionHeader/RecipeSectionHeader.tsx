import * as React from 'react';
import CodeHint from './components/CodeHint';
// import TextBlock from '../../../TextBlock';

interface iRecipeSectionheaderProps {
  recipesArray: Array<string>;
  updateRecipesArray: any;
}

interface iRecipeSectionheaderState {
  recipeCodeInput: string;
  noteInput: string;
  errors: any;
  hintVisible: boolean;
}

class RecipeSectionHeader extends React.PureComponent<iRecipeSectionheaderProps, iRecipeSectionheaderState> {
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
      noteInput: '',
      errors: '',
      hintVisible: false,
    };

    this.recipeCodeInputChange = this.recipeCodeInputChange.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.showHint = this.showHint.bind(this);
    this.hideHint = this.hideHint.bind(this);
  }

  setErrors = error => {
    this.setState({
      errors: { ...this.state.errors, ...error }
    });
  }

  recipeCodeInputChange(e: any) {
    const value = String(e.target && e.target.value).replace(/\s/g, '');
    // maximum length of e-receipe code is 12
    if (value.length > 12) {
      return;
    }

    if (value !== null) {
      this.setState({ recipeCodeInput: value.replace(/(\w{1,4})?(\w{1,4})?(\w{1,4})?/, '$1 $2 $3') });
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

  updateNote(e: any) {
    this.setState({noteInput: e.target.value});
  }

  showHint(e: any) {
    e.preventDefault();
    this.setState({hintVisible: true});
  }

  hideHint() {
    this.setState({hintVisible: false});
  }

  render() {
    const { recipesArray } = this.props;
    const { recipeCodeInput, errors } = this.state;
    const errorCodeBoolean = errors.code && errors.code.length > 0;

    return (
      <header className="recipe-header">
        <div className="container">
          {/* <TextBlock data={this.data} /> */}

          <h1 className="gradientHeading">{this.data.title}</h1>

          <section className="row intro">
            <div className="col-md-6 hide-smaller-md">
              <p className="text text-left">
                {this.data.text}
              </p>
            </div>
            <div className="col-md-6 steps">
              <div className="step">
                <img
                  src={'/assets/mediconLekarny/images/numbers/1.svg'}
                  className="step-image"
                  alt="1"
                />
                <p className="step-text">
                  Vyplňte kód receptu
                </p>
              </div>
              <div className="step">
                <img
                  src={'/assets/mediconLekarny/images/numbers/2.svg'}
                  className="step-image"
                  alt="2"
                />
                <p className="step-text">
                  Počkejte na&nbsp;potvrzení rezervace
                </p>
              </div>
              <div className="step">
                <img
                  src={'/assets/mediconLekarny/images/numbers/3.svg'}
                  className="step-image"
                  alt="3"
                />
                <p className="step-text">
                  Vyzvedněte&nbsp;si své léky ve&nbsp;Vaší lékárně Pharmacentrum
                </p>
              </div>
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
                Vyfotit
                <span className="plus-icon" />
              </button>
            </div>

            <section className="hint-wrapper">
              <p className="text text-center text-cursive">
                Jde o 12-místný alfanumerický kód, čárový kód, QR kód nebo odkaz ke stažení kódu.
              </p>
              {!this.state.hintVisible && <button
                type="button"
                className="display-hint gradientHeading"
                onClick={this.showHint}
              >
                ( zobrazit nápovědu )
              </button>}
              {this.state.hintVisible && <CodeHint hideHint={this.hideHint} />}
            </section>

            {/* REZERVACE RECEPTŮ S KÓDEM:
            {console.log('recipes', recipesArray)}
            {Array.isArray(recipesArray)
              && recipesArray.length > 0
              && recipesArray.map((recipe: string) => {
                return <span key={`id${recipe}`}>{recipe} more</span>
              })
            }
            <br/>
            <br/>
            kod v inputu -> state v header komponentě {recipeCodeInput} */}

            <form action="" className="reservation-note">
              <label className="textform-label">
                <span className="textform-label_text">Další objednávka receptů</span>
                <textarea
                  name="note"
                  className="recipe-input"
                  onChange={this.updateNote}
                />
              </label>
            </form>
          </section>
        </div>
      </header>
    );
  }
}

export default RecipeSectionHeader;