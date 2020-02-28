import * as React from 'react';

interface RecipeOwnerInfoState {
  name: string;
  phone: string;
  email: string;
  contactWayMail: boolean;
  contactWayPhone: boolean;
  gdpr: boolean;
  errors: any;
}

interface RecipeOwnerInfoProps {
  updateMainComponent: any;
}

class RecipeOwnerInfo extends React.Component<RecipeOwnerInfoProps, RecipeOwnerInfoState> {
  constructor(props: RecipeOwnerInfoProps) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
      contactWayMail: false,
      contactWayPhone: false,
      gdpr: false,
      errors: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.setErrors = this.setErrors.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.updateMainComponent = this.updateMainComponent.bind(this);
  }

  updateMainComponent(data: any) {
    this.props.updateMainComponent(data);
  }

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

  validatePhone(phone: string) {
    const reg = /^\d+$/;
    if (reg.test(phone)) {
      this.setErrors({phone: ''});
    } else {
      this.setErrors({phone: 'Vyplňte prosím telefoní číslo (formát: XXX XXX XXX)'});
    }
  }

  validateEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      this.setErrors({email: ''});
    } else {
      this.setErrors({email: 'Zkontrolujte si prosím zda jste správně vyplnili e-mail.'})
    }
  }

  handleInputChange(e:any) {
    if (e.target.name === 'name') {
      this.validateName(e.target.value);
      this.setState({name: e.target.value});
    }
    if (e.target.name === 'phone') {
      this.validatePhone(e.target.value);
      this.setState({phone: e.target.value});
    }
    if (e.target.name === 'email') {
      this.validateEmail(e.target.value);
      this.setState({email: e.target.value});
    }
    this.updateMainComponent(this.state);
  }

  render() {
    console.log('state form info owner', this.state);

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
                  onChange={this.handleInputChange}
                  required={true}
                />
              </label>
              <label className="center">
                E-mail
                <input
                  type="email"
                  name="email"
                  onChange={this.handleInputChange}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeOwnerInfo;
