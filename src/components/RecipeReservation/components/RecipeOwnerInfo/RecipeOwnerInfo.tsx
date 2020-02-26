import * as React from 'react';

interface IRecipeOwnerInfoState {
  name: string;
  phone: string;
  email: string;
  contactWayMail: boolean;
  contactWayPhone: boolean;
  gdpr: boolean;
  errors: any;
}

class RecipeOwnerInfo extends React.Component<{}, IRecipeOwnerInfoState> {
  constructor(props:any) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // validateEmail = email => {
  //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   if (!re.test(String(email).toLowerCase()))
  //     setTimeout(() => this.setErrors({ email: "Email is invalid" }), 800);
  //   else this.setErrors({ email: "" });
  // };

  setErrors = error => {
    this.setState({
      errors: { ...this.state.errors, ...error }
    });
  }

  validateName(name: string) {
    if (name.length < 5) {
      this.setErrors({name: 'Jméno musí být vyplněno'});
    } else {
      this.setErrors({name: ''});
    }
  }

  handleInputChange(e:any) {
    if (e.target.name === 'name') {
      this.validateName(e.target.value);
      this.setState({name: e.target.value});
    }
  }

  render() {
    return (
      <div className="row recipe-owner-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 form-wrap">
              <label className="center">
                Jméno a Příjmení
                <input
                  type="text"
                  name="name"
                  onChange={this.handleInputChange}
                  required={true}
                />
              </label>
              <label className="center">
                Telefon
                <input
                  type="tel"
                  name="phone"
                  required={true}
                />
              </label>
              <label className="center">
                E-mail
                <input
                  type="email"
                  name="email"
                  required={true}
                />
              </label>

              <div className="contact-choose">
                <span>Jak chcete, abychom vás kontaktovali?</span>
                <label className="checkbox-label">
                  <input
                    name="contactWayMail"
                    type="checkbox"
                    checked={false}
                    onChange={() => console.log('ahoj')}
                  />
                  E-mailem
                </label>
                <label className="checkbox-label checked">
                  <input
                    name="contactWayPhone"
                    type="checkbox"
                    checked={true}
                    onChange={() => console.log('ahoj')}
                  />
                  Přes sms
                </label>
              </div>

              <label className="gdpr-info checkbox-label">
                <input
                  name="dgpr"
                  type="checkbox"
                  checked={false}
                  onChange={() => console.log('ne')}
                  required={true}
                />
                Poučení o zpracování údajů
              </label>
              <a
                href="https://www.mediconas.cz/cs/ochrana-osobnich-udaju"
                className="link"
              >
                Stáhnout podmínky zpracování údajů
              </a>
              <button
                type="button"
                className="recipe-btn submit-btn"
              >
                Odeslat rezervaci
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeOwnerInfo;
