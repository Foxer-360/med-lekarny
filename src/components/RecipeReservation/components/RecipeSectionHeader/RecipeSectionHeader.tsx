import * as React from 'react';
import CodeHint from './components/CodeHint';
import * as ReactMarkdown from 'react-markdown';

// test code: PCIFF8GNBLOI PD4R54LQFRNW

interface iRecipeSectionheaderProps {
  recipesArray: Array<string>;
  updateRecipesArray: any;
  note: string,
  boData: any,
  updateNote: (note: string) => void;
  onLoadFileHandler: (e: any) => void;
}

interface iRecipeSectionheaderState {
  recipeCodeInput: string;
  errors: any;
  hintVisible: boolean;
}

class RecipeSectionHeader extends React.PureComponent<iRecipeSectionheaderProps, iRecipeSectionheaderState> {
  private timeout = null;
  private validationTable = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', '8', '9', '2', '3', '4', '5', '6', '7'
  ];

  private translations = {
    code_invalid: 'Kód je neplatný.'
  };

  constructor(props: iRecipeSectionheaderProps) {
    super(props);

    this.state = {
      recipeCodeInput: '',
      errors: {},
      hintVisible: false,
    };
  }

  setErrors = error => {
    this.setState({
      errors: { ...this.state.errors, ...error }
    });
  }

  recipeCodeInputChange = (e: any) => {
    const { recipesArray } = this.props;

    const value = String(e.target && e.target.value).replace(/\s/g, '');
    // maximum length of e-receipe code is 12
    if (value.length > 12) {
      return;
    }

    if (value !== null) {
      this.setState({ recipeCodeInput: value});
    }

    if (value.length === 0) {
      this.setErrors({code: ''});
    }

    const isValid = this.validateCode(value);
    if (isValid && !recipesArray.includes(value)) {
      this.props.updateRecipesArray([ ...recipesArray, value ]);
    }

    if (isValid) {
      this.setState({ recipeCodeInput: '' });
    }
  }

  recipeCodesArrayUpdate = (code: string) => {
    let codesArray = this.props.recipesArray;
    this.setState({recipeCodeInput: ''});
    codesArray.push(code);
  }

  validateCode = (code: string) => {
    const ereceiptCode = code.replace(/\W/gi, '').toUpperCase();
    let total = 0;
    // calculate sum based on base32 table
    for (let i = 0; i < ereceiptCode.length - 1; i++) {
      total += this.validationTable.indexOf(ereceiptCode[i]);
    }
    // check if control number makes sense
    const isValid = (this.validationTable.indexOf(ereceiptCode[ereceiptCode.length - 1]) === total % 32)
                      && ereceiptCode.length === 12;
    if (!isValid) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => { this.setErrors({ code: this.translations.code_invalid }); }, 1600);
    } else {
      this.setErrors({ code: '' });
    }
    return isValid;
  }

  showHint = (e: any) => {
    e.preventDefault();
    this.setState({hintVisible: true});
  }

  hideHint = () => {
    this.setState({hintVisible: false});
  }

  deleteCode = (code: string) => {
    const codeArray = this.props.recipesArray;
    const indexOfCode = codeArray.indexOf(code);

    if (indexOfCode > -1) {
      codeArray.splice(indexOfCode, 1);
      this.props.updateRecipesArray([ ...codeArray ]);
    }
  }

  formatCode = (code: string) => {
    return code.replace(/(\w{1,4})?(\w{1,4})?(\w{1,4})?/, '$1 $2 $3');
  }

  render() {
    const { recipesArray, updateNote, onLoadFileHandler } = this.props;
    const { recipeCodeInput, errors } = this.state;
    const errorCodeBoolean = errors.code && errors.code.length > 0;
    const boData = this.props.boData;

    return (
      <header className="recipe-header">
        <div className="container">
          <h1 className="gradientHeading">{boData.headline}</h1>
          <section className="row intro">
            <div className="col-md-6 hide-smaller-md">
              <p className="text text-left">
                <ReactMarkdown source={boData.text} />
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
                  {boData.step1}
                </p>
              </div>
              <div className="step">
                <img
                  src={'/assets/mediconLekarny/images/numbers/2.svg'}
                  className="step-image"
                  alt="2"
                />
                <p className="step-text">
                  {boData.step2}
                </p>
              </div>
              <div className="step">
                <img
                  src={'/assets/mediconLekarny/images/numbers/3.svg'}
                  className="step-image"
                  alt="3"
                />
                <p className="step-text">
                  {boData.step3}
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
              <button className="recipe-btn" >
                Vyfotit
                <input type="file" name="file" className="file-input" onChange={onLoadFileHandler} />
                <span className="plus-icon" />
              </button>
            </div>
            <div className="codes-wrapper">
              {Array.isArray(recipesArray) && recipesArray.map((recipeCode: string) => (
                <span
                  className={`accepted-code`}
                >
                  {this.formatCode(recipeCode)}
                  <button
                    className={`accepted-code-delete`}
                    type="button"
                    onClick={() => this.deleteCode(recipeCode)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <section className="hint-wrapper">
              <p className="text text-center text-cursive">
                {boData.codeInputHint}
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
            <form action="" className="reservation-note">
              <label className="textform-label">
                <span className="textform-label_text">{boData.noteInputLabel}</span>
                <textarea
                  name="note"
                  className="recipe-input"
                  onChange={(e) => updateNote(e.target.value)}
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
