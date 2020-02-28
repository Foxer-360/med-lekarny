import * as React from 'react';
import pharmaPlaces from '../pharmaPlaces';


interface iRecipePickupPickProps {
  pickupPlace: string,
  updatePickupPlace: any;
}

class RecipePickupPick extends React.Component<iRecipePickupPickProps> {
  constructor(props: iRecipePickupPickProps) {
    super(props);
  }

  updateSelectedPickupPoint(id: string) {
    this.props.updatePickupPlace(id);
    return this.setState({selectedPickupPoint: id});
  }

  render() {
    const { pickupPlace } = this.props;

    return (
        <div className="container recipe-pickup-place">
          <span className="subheadline">Výběr lekárny, kde si léky vyzvednu</span>

          <div className="row">
            {pharmaPlaces.map((place: any) => {
              return (
                <div key={place.id} className="col-6 pickup-point_wrap">
                  <div className="pickup-point">
                    <img src={'/assets/mediconLekarny/images/mediconLekarnyLogo.png'} alt={'pharmacentrum logo'} />
                    <p className="address address-bold">{place.address1}</p>
                    <p className="address">{place.address2}</p>
                    <p className="address">{place.openHours}</p>
                    <button
                      className={`recipe-btn btn-plus ${pickupPlace === place.id ? 'selected' : ''}`}
                      onClick={() => this.updateSelectedPickupPoint(place.id)}
                    >
                      {pickupPlace === place.id ? 'Vyzvednu zde' : 'Vybrat lékárnu'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    );
  }
}

export default RecipePickupPick;
