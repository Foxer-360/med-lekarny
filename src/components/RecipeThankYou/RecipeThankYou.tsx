import * as React from 'react';
import RecipeReservationOutpost from './components/RecipeReservationOutpost/RecipeReservationOutpost';

class RecipeThankYou extends React.Component {
  render() {
    const now = new Date(Date.now());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('cs-CZ', options);

    return (
      <div className="recipe-thankyou-page">
        <div className="gray-part pdt80">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h1 className="gradientHeading">Děkujeme</h1>
                {/* <p className="text">
                  Vaše rezervace <span className="text-turquoise">č. 1234567890</span> je&nbsp;dokončena.
                </p> */}
                <p className="text">
                  číslo vašeho e-receptu je<br/>
                  <span className="text-turquoise"> 1234567890</span>
                </p>
                <p className="text">
                  datum vaší rezervace: <br/>
                  <span className="text-turquoise">{date}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="white-part">
          <div className="container">
            <div className="col-md-8 offset-md-2">
              <p className="text">vybrali jste si pobočku</p>
              <RecipeReservationOutpost />
            </div>
          </div>
        </div>
        <div className="gray-part">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <p>Vyčkejte na potvrzovací e-mail / sms,<br/>že jsou Vaše léky připraveny k vyzvednutí.</p>
                <img
                  className={'done'}
                  alt={'done'}
                  src={'/assets/mediconLekarny/images/fajfka.png'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeThankYou;
