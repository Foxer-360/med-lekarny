import * as React from 'react';

export interface HelpPopupProps {}

export interface HelpPopupState {
  active: boolean;
}

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
      <div className={`helpPopup ${this.state.active ? 'helpPopup--active' : ''} `}>
        <div
          className={'helpPopup__main'}
          style={{ backgroundImage: 'url(/assets/medicon/images/phone2.png)' }}
          onClick={() => this.toggleList()}
        >
          <h4>Potrebujete poraditz</h4>
        </div>

        <ul className={'helpPopup__list'}>
          <li style={{ backgroundImage: 'url(/assets/mediconLekarny/images/phone2.png)' }}>
            <p>Pharmacentrum Budějovická</p>
            <a href="tel:+420261006330">+420 261 006 330</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/mediconLekarny/images/phone2.png)' }}>
            <p>Pharmacentrum DBK</p>
            <a href="tel:+420296825318">+420 296 825 318</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/mediconLekarny/images/phone2.png)' }}>
            <p>Pharmacentrum Vysočany</p>
            <a href="tel:+420266006324">+420 266 006 324</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/mediconLekarny/images/phone2.png)' }}>
            <p>Pharmacentrum Holešovice</p>
            <a href="tel:+420227777699">+420 227 777 699</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/mediconLekarny/images/phone2.png)' }}>
            <p>MEDICON Pharm s.r.o.</p>
            <a href="tel:+420261006330">+420 261 006 330</a>
          </li>
        </ul>
      </div>
    );
  }
}