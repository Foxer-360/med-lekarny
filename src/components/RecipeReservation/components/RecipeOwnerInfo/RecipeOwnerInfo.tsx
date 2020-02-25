import * as React from 'react';

class RecipeOwnerInfo extends React.Component {
  render() {
    return (
      <div className="row recipe-owner-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 form-wrap">
              <label className="center">
                Jméno a Příjmení
                <input type="text" name="name" />
              </label>
              <label className="center">
                Telefon
                <input type="text" name="phone" />
              </label>
              <label className="center">
                E-mail
                <input type="text" name="email" />
              </label>

              <div className="contact-choose">
                <span>Jak chcete, abychom vás kontaktovali?</span>
                <label className="checkbox-label">
                  <input
                    name="contactWay"
                    type="checkbox"
                    checked={false}
                    onChange={() => console.log('ahoj')}
                  />
                  E-mailem
                </label>
                <label className="checkbox-label checked">
                  <input
                    name="contactWay"
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
