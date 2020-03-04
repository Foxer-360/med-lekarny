import * as React from 'react';

interface iCodeHintProps {
  hideHint: any;
}

class CodeHint extends React.Component<iCodeHintProps, {}> {
  constructor(props: iCodeHintProps) {
    super(props);

    this.hideHint = this.hideHint.bind(this);
  }

  hideHint() {
    return this.props.hideHint();
  }

  render() {
    return (
      <section className="recipe-illustrations">
        <div className="row">
          <div className="col-4 ilu-column">
            <img
              className={'recipe-ilu list'}
              alt={'receipt image'}
              src={'/assets/mediconLekarny/images/recept-list.png'}
            />
            <span className="ilu-title">PRŮVODKA</span>
          </div>
          <div className="col-4 ilu-column">
            <img
              className={'recipe-ilu phone'}
              alt={'receipt image'}
              src={'/assets/mediconLekarny/images/recept-phone.png'}
            />
            <span className="ilu-title">SMS</span>
          </div>
          <div className="col-4 ilu-column">
            <img
              className={'recipe-ilu pc'}
              alt={'receipt image'}
              src={'/assets/mediconLekarny/images/recept-pc.png'}
            />
            <span className="ilu-title">E-MAIL</span>
          </div>
        </div>
        <div className="row ilu-text">
          <p className="text text-center">
            Zde najdete identifikátor Vašeho receptu.
          </p>
        </div>
        <button
          type="button"
          className="btn-hide-hint gradientHeading"
          onClick={this.hideHint}
        >
          ( zavřít nápovědu )
        </button>
      </section>
    );
  }
}

export default CodeHint;
