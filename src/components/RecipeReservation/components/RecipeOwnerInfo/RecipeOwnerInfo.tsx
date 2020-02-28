import * as React from 'react';

type IInputType = { key: string, value: string | boolean};

interface RecipeOwnerInfoProps {
  boData: any;
  errors: any;
  owner: {
    name: string;
    phone: string;
    email: string;
    contactByEmail: boolean;
    contactBySMS: boolean;
    gdpr: boolean;
  };
  updateMainComponent: (data: any) => void;
  validateOwner: any;
}

class RecipeOwnerInfo extends React.Component<RecipeOwnerInfoProps> {
  updateMainComponent = (data: any) => {
    this.props.updateMainComponent(data);
  }

  handleInputChange = (update: any) => {
    this.setState(update, () => this.updateMainComponent(this.state));
  }

  validate = (key: any, value: any) => {
    this.props.validateOwner(key, value);
  }

  render() {
    const { owner: { contactBySMS, contactByEmail, gdpr }, errors } = this.props;

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
                  onChange={
                    e => {
                      this.handleInputChange({ [e.target.name]: e.target.value });
                      this.validate([e.target.name], e.target.value);
                    }
                  }
                  className={`${errors.name && errors.name.length > 0 ? 'error' : ''}`}
                  required={true}
                />
                <span className="error-msg">{errors.name}</span>
              </label>
              <label className="center">
                Telefon
                <input
                  type="tel"
                  name="phone"
                  onChange={
                    e => {
                      this.handleInputChange({ [e.target.name]: e.target.value });
                      this.validate([e.target.name], e.target.value);
                    }
                  }
                  className={`${errors.phone && errors.phone.length > 0 ? 'error' : ''}`}
                  required={true}
                />
                <span className="error-msg">{errors.phone}</span>
              </label>
              <label className="center">
                E-mail
                <input
                  type="email"
                  name="email"
                  onChange={
                    e => {
                      this.handleInputChange({ [e.target.name]: e.target.value });
                      this.validate([e.target.name], e.target.value);
                    }
                  }
                  className={`${errors.email && errors.email.length > 0 ? 'error' : ''}`}
                  required={true}
                />
                <span className="error-msg">{errors.email}</span>
              </label>

              <div className="contact-choose">
                <span>{this.props.boData.contactByText}</span>
                <label className={`checkbox-label ${contactBySMS && 'checked'}`}>
                  <input
                    name="contactBySMS"
                    type="checkbox"
                    checked={contactBySMS}
                    onChange={e => this.handleInputChange({ contactBySMS: true, contactByEmail: false })}
                  />
                  Přes sms
                </label>
                <label className={`checkbox-label ${contactByEmail && 'checked'}`}>
                  <input
                    name="contactByEmail"
                    type="checkbox"
                    checked={contactByEmail}
                    onChange={e => this.handleInputChange({ contactByEmail: true, contactBySMS: false })}
                  />
                  E-mailem
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
