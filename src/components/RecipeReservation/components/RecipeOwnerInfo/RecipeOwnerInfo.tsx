import * as React from 'react';

type IInputType = { key: string, value: string | boolean};

interface RecipeOwnerInfoProps {
  owner: {
    name: string;
    phone: string;
    email: string;
    contactByPhone: boolean;
    contactBySMS: boolean;
    gdpr: boolean;
    errors: any;
  },
  updateMainComponent: (data: any) => void;
}

class RecipeOwnerInfo extends React.Component<RecipeOwnerInfoProps> {
  updateMainComponent = (data: any) => {
    this.props.updateMainComponent(data);
  }

  setErrors = error => {
    // this.setState({
    //   errors: { ...this.state.errors, ...error }
    // });
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
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      this.setErrors({email: ''});
    } else {
      this.setErrors({email: 'Zkontrolujte si prosím zda jste správně vyplnili e-mail.'})
    }
  }


  handleInputChange = (update: any) => {
    this.setState(update, () => this.updateMainComponent(this.state));
  }

  render() {
    const { owner: { contactBySMS, contactByPhone, gdpr } } = this.props;

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
                  onChange={e => this.handleInputChange({ [e.target.name]: e.target.value })}
                  required={true}
                />
              </label>
              <label className="center">
                Telefon
                <input
                  type="tel"
                  name="phone"
                  onChange={e => this.handleInputChange({ [e.target.name]: e.target.value })}
                  required={true}
                />
              </label>
              <label className="center">
                E-mail
                <input
                  type="email"
                  name="email"
                  onChange={e => this.handleInputChange({ [e.target.name]: e.target.value })}
                  required={true}
                />
              </label>

              <div className="contact-choose">
                <span>Jak chcete, abychom vás kontaktovali?</span>
                <label className={`checkbox-label ${contactBySMS && 'checked'}`}>
                  <input
                    name="contactBySMS"
                    type="checkbox"
                    checked={contactBySMS}
                    onChange={e => this.handleInputChange({ contactBySMS: false, contactByPhone: true })}
                  />
                  Přes sms
                </label>
                <label className={`checkbox-label ${contactByPhone && 'checked'}`}>
                  <input
                    name="contactByPhone"
                    type="checkbox"
                    checked={contactByPhone}
                    onChange={e => this.handleInputChange({ contactByPhone: true, contactBySMS: false })}
                  />
                  Telefonicky
                </label>
              </div>

              <label className={`gdpr-info checkbox-label ${gdpr && 'checked'}`}>
                <input
                  name="dgpr"
                  type="checkbox"
                  checked={false}
                  onChange={() => this.handleInputChange({ gdpr: !gdpr })}
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
