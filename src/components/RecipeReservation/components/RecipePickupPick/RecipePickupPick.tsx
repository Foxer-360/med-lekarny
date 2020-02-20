import * as React from 'react';

interface Props {

}

class RecipePickupPick extends React.Component<Props> {
  render() {
    return (
        <div className="container recipe-pickup-place">
          <span className="subheadline">Výběr lekárny, kde si léky vyzvednu</span>

          {/* Start: radio like selects */}
          <div className="row">
            <div className="col-md-6 pickup-point_wrap">
              <div className="pickup-point">
                <img src={'/assets/mediconLekarny/images/pharmacentres/pharma_bud.png'} alt={'pharmacentrum logo'} />
                <p className="address address-bold">A. Staška 1670/80</p>
                <p className="address">Praha 4</p>
                <p className="address">140 00</p>
                <button className="recipe-btn btn-plus">Vybrat lékárnu</button>
              </div>
            </div>
            <div className="col-md-6 pickup-point_wrap">
              <div className="pickup-point">
                <img src={'/assets/mediconLekarny/images/pharmacentres/pharma_bud.png'} alt={'pharmacentrum logo'} />
                <p className="address address-bold">Roškotova 1225/1</p>
                <p className="address">Praha 4</p>
                <p className="address">140 00</p>
                <button className="recipe-btn btn-plus">Vybrat lékárnu</button>
              </div>
            </div>
            <div className="col-md-6 pickup-point_wrap">
              <div className="pickup-point">
                <img src={'/assets/mediconLekarny/images/pharmacentres/pharma_vys.png'} alt={'pharmacentrum logo'} />
                <p className="address address-bold">Sokolovská 810/304</p>
                <p className="address">Praha 9</p>
                <p className="address">190 61</p>
                <button className="recipe-btn btn-plus">Vybrat lékárnu</button>
              </div>
            </div>
            <div className="col-md-6 pickup-point_wrap">
              <div className="pickup-point">
                <img src={'/assets/mediconLekarny/images/pharmacentres/pharma_dbk.png'} alt={'pharmacentrum logo'} />
                <p className="address address-bold">Budějovická 1667/64</p>
                <p className="address">Praha 4</p>
                <p className="address">140 00</p>
                <button className="recipe-btn btn-plus">Vybrat lékárnu</button>
              </div>
            </div>
          </div>
          {/* End: radio like selects */}

        </div>
    );
  }
}

export default RecipePickupPick;
