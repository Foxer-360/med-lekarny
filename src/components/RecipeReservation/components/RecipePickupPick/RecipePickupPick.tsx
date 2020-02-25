import * as React from 'react';

interface iRecipePickupPickState {
  selectedPickupPoint: string;
}

interface iRecipePickupPickProps {

}

class RecipePickupPick extends React.Component<iRecipePickupPickProps, iRecipePickupPickState> {
  constructor(props: iRecipePickupPickProps) {
    super(props);

    this.state = {
      selectedPickupPoint: '',
    };
  }

  updateSelectedPickupPoint(id: string) {
    console.log('id', id);
    return this.setState({selectedPickupPoint: id});
  }

  render() {
    return (
        <div className="container recipe-pickup-place">
          <span className="subheadline">Výběr lekárny, kde si léky vyzvednu</span>

          {/* Start: radio like selects */}
          <div className="row">
            <div className="col-6 pickup-point_wrap">
              <div className="pickup-point">
                <img src={'/assets/mediconLekarny/images/pharmacentres/pharma_bud.png'} alt={'pharmacentrum logo'} />
                <p className="address address-bold">A. Staška 1670/80</p>
                <p className="address">Praha 4</p>
                <p className="address">140 00</p>
                <p className="address">po-pá: 8-17, so: 9-16</p>
                <button
                  className="recipe-btn btn-plus"
                  onClick={() => this.updateSelectedPickupPoint('1')}
                >
                  Vybrat lékárnu
                </button>
              </div>
            </div>
            <div className="col-6 pickup-point_wrap">
              <div className="pickup-point">
                <img src={'/assets/mediconLekarny/images/pharmacentres/pharma_bud.png'} alt={'pharmacentrum logo'} />
                <p className="address address-bold">Roškotova 1225/1</p>
                <p className="address">Praha 4</p>
                <p className="address">140 00</p>
                <p className="address">po-pá: 8-17, so: 9-16</p>
                <button className="recipe-btn btn-plus">Vybrat lékárnu</button>
              </div>
            </div>
            <div className="col-6 pickup-point_wrap">
              <div className="pickup-point">
                <img src={'/assets/mediconLekarny/images/pharmacentres/pharma_vys.png'} alt={'pharmacentrum logo'} />
                <p className="address address-bold">Sokolovská 810/304</p>
                <p className="address">Praha 9</p>
                <p className="address">190 61</p>
                <p className="address">po-pá: 8-17, so: 9-16</p>
                <button className="recipe-btn btn-plus">Vybrat lékárnu</button>
              </div>
            </div>
            <div className="col-6 pickup-point_wrap">
              <div className="pickup-point">
                <img src={'/assets/mediconLekarny/images/pharmacentres/pharma_dbk.png'} alt={'pharmacentrum logo'} />
                <p className="address address-bold">Budějovická 1667/64</p>
                <p className="address">Praha 4</p>
                <p className="address">140 00</p>
                <p className="address">po-pá: 8-17, so: 9-16</p>
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
