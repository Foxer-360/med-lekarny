import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';

export interface HelpPopupProps {}

export interface HelpPopupState {
  active: boolean;
}

const GET_CONTEXT = gql`
  {
    languageData @client
  }
`;

const ComposedQuery = adopt({
  getContext: ({ render }) => <Query query={GET_CONTEXT}>{({ data }) => render(data)}</Query>,
});

export default class HelpPopup extends React.Component<HelpPopupProps, HelpPopupState> {
  constructor(props: HelpPopupProps) {
    super(props);

    this.state = {
      active: false,
    };
  }

  toggleList = () => {
    this.setState({
      active: !this.state.active,
    });
  }

  public render() {
    return (
      <ComposedQuery>
        {({ getContext: { languageData } }) => {

          return languageData.code === 'cs' ? (
            <div className={`helpPopup ${this.state.active ? 'helpPopup--active' : ''} `}>
              <div
                className={'helpPopup__main'}
                style={{ backgroundImage: 'url(/assets/mediconLekarny/images/phoneIcon.svg)' }}
                onClick={() => this.toggleList()}
              >
                <h4>Potřebujete poradit?</h4>
              </div>

              <ul className={'helpPopup__list'}>
                <li style={{ backgroundImage: 'url(/assets/mediconLekarny/images/phoneIcon.svg)' }}>
                  <p>Pharmacentrum Budějovická</p>
                  <a href="tel:+420227777300">+420 227 777 300</a>
                </li>

                <li style={{ backgroundImage: 'url(/assets/mediconLekarny/images/phoneIcon.svg)' }}>
                  <p>Pharmacentrum DBK</p>
                  <a href="tel:+420296825318">+420 296 825 318</a>
                </li>

                <li style={{ backgroundImage: 'url(/assets/mediconLekarny/images/phoneIcon.svg)' }}>
                  <p>Pharmacentrum Vysočany</p>
                  <a href="tel:+420227777322">+420 227 777 322</a>
                </li>

                <li style={{ backgroundImage: 'url(/assets/mediconLekarny/images/phoneIcon.svg)' }}>
                  <p>Pharmacentrum Holešovice</p>
                  <a href="tel:+420227777699">+420 227 777 699</a>
                </li>

                <li style={{ backgroundImage: 'url(/assets/mediconLekarny/images/phoneIcon.svg)' }}>
                  <p>Pharmacentrum Háje</p>
                  <a href="tel:+420227777328">+420 227 777 328</a>
                </li>
              </ul>
            </div>
          ) : '';
        }}
      </ComposedQuery>
    );
  }
}