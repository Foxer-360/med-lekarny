import * as React from 'react';
import TextBlock from '../../../TextBlock';

interface Props {

}

const data = {
  title: 'Rezervace e-receptů',
  text: 'Rezervujte si léky z Vašeho receptu předem a ušetřete si dvojí cestu do lékárny! Stačí vyplnit kód Vašeho e-receptu nebo název Vašeho léku a my Vám dáme vědět, kdy budou Vaše léky připraveny k vyzvednutí. Můžete si zarezervovat i další volně prodejné přípravky.',
};

class RecipeSectionHeader extends React.Component<Props> {

  render() {
    return (
      <header className="recipe-header">
        <div className="container">
          <TextBlock data={data} />
          <section className="recipe-input-wrapper">
            <h4 className="headline">Kód e-receptu</h4>
            <div className="form-wrapper">
              <input type="text" className="recipe-input" placeholder="začněte psát"/>
              <span className="center-word">nebo</span>
              <button className="recipe-btn">
                Nahrát foto
                <span className="plus-icon" />
              </button>
            </div>
          </section>
        </div>
      </header>
    );
  }
}

export default RecipeSectionHeader;
