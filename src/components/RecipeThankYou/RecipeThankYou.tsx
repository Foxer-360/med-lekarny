import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import RecipeReservationOutpost from './components/RecipeReservationOutpost/RecipeReservationOutpost';
import * as queryString from 'query-string';

class RecipeThankYou extends React.Component<RouteComponentProps, {}> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.parseCode = this.parseCode.bind(this);
    this.parsePlace = this.parsePlace.bind(this);
  }

  parseCode(query: string) {
    const kve = queryString.parse(query, {arrayFormat: 'bracket'});
    return kve.codes;
  }

  parsePlace(query: string) {
    const kve = queryString.parse(query);
    return kve.place;
  }

  render() {
    const now = new Date(Date.now());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('cs-CZ', options);
    const search = this.props
                    && this.props.location
                    && this.props.location.search;
    const codes = search && (search.length > 0) && this.parseCode(search);

    return (
      <div className="recipe-thankyou-page">
        <div className="gray-part pdt80">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h1 className="gradientHeading">Děkujeme</h1>
                <p className="text">
                  číslo vašeho e-receptu je<br/>
                  <span className="text-turquoise">
                    {codes
                      && Array.isArray(codes)
                      && codes.map((code: string) => {
                        return code;
                      })
                    }
                  </span>
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
              {search
                && (search.length > 0)
                && <RecipeReservationOutpost place={this.parsePlace(search)} />}
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

export default withRouter(RecipeThankYou);
