import * as React from 'react';
import pharmaPlaces from '../pharmaPlaces';

interface RecipePickupPickProps {
  pickupPlace: string;
  updatePickupPlace: any;
  boData: any;
}

class RecipePickupPick extends React.Component<RecipePickupPickProps> {
  constructor(props: RecipePickupPickProps) {
    super(props);
  }

  updateSelectedPickupPoint(id: string) {
    this.props.updatePickupPlace(id);
    return this.setState({selectedPickupPoint: id});
  }

  render() {
    const { boData, pickupPlace } = this.props;

    return (
        <div className="container recipe-pickup-place">
          <span className="subheadline">{boData.placesHeading}</span>

          <div className="row">
            {pharmaPlaces.map((place: any) => {
              return (
                <div key={place.id} className="col-6 pickup-point_wrap">
                  <div className="pickup-point">
                    <img src={'/assets/mediconLekarny/images/mediconLekarnyLogo.png'} alt={'pharmacentrum logo'} />
                    <p className="address address-bold">{place.name}</p>
                    <p className="address">{place.address1}</p>
                    <p className="address">{place.address2}</p>
                    <p className="address">{place.openHours1}</p>
                    <p className="address">{place.openHours2}</p>
                    <button
                      className={`recipe-btn btn-plus ${pickupPlace === place.id ? 'selected' : ''}`}
                      onClick={() => this.updateSelectedPickupPoint(place.id)}
                    >
                      {pickupPlace === place.id
                        ?  boData.placesBtnTextActive
                        : boData.placesBtnTextInactive
                      }
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
