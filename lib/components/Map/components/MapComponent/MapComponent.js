"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GoogleMapsApiKey = void 0;

var React = _interopRequireWildcard(require("react"));

var _googleMapReact = _interopRequireDefault(require("google-map-react"));

var _reactGeolocated = require("react-geolocated");

var _Marker = _interopRequireDefault(require("../Marker"));

var _MapBox = _interopRequireDefault(require("../MapBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
exports.GoogleMapsApiKey = GoogleMapsApiKey;
// !DEV ONLY
var clinics = [{
  lat: 50.042601,
  lng: 14.450139,
  name: 'clinic1'
}, {
  lat: 50.107963,
  lng: 14.494764,
  name: 'clinic2'
}, {
  lat: 50.041031,
  lng: 14.429104,
  name: 'clinic3'
}];

var MapComponent =
/** @class */
function (_super) {
  __extends(MapComponent, _super);

  function MapComponent(props) {
    var _this = _super.call(this, props) || this;

    _this.handleMarkerClick = function (e, key, lat, lng) {
      _this.setState({
        activeMarker: key,
        activeMarkerCenter: {
          lat: lat,
          lng: lng
        }
      });

      e.stopPropagation();
    };

    _this.handleMarkerClose = function () {
      _this.setState({
        activeMarker: null,
        activeMarkerCenter: null
      });
    };

    _this.getMapBounds = function (map, maps, locations) {
      var bounds = new maps.LatLngBounds();
      locations.forEach(function (location) {
        bounds.extend(new maps.LatLng(location.props.lat, location.props.lng));
      });
      return bounds;
    };

    _this.apiIsLoaded = function (map, maps, locations) {
      if (map) {
        var bounds = _this.getMapBounds(map, maps, locations);

        map.fitBounds(bounds);
      }
    };

    _this.deg2Rad = function (deg) {
      return deg * Math.PI / 180;
    };

    _this.pythagorasEquirectangular = function (lat1, lon1, lat2, lon2) {
      lat1 = _this.deg2Rad(lat1);
      lat2 = _this.deg2Rad(lat2);
      lon1 = _this.deg2Rad(lon1);
      lon2 = _this.deg2Rad(lon2);
      var R = 6371;
      var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
      var y = lat2 - lat1;
      var d = Math.sqrt(x * x + y * y) * R;
      return d;
    };

    _this.nearestClinic = function (latitude, longitude) {
      var mindif = 99999;
      var closest;

      for (var index = 0; index < clinics.length; ++index) {
        var dif = _this.pythagorasEquirectangular(latitude, longitude, clinics[index].lat, clinics[index].lng);

        if (dif < mindif) {
          closest = index;
          mindif = dif;
        }
      }

      return clinics[closest];
    };

    _this.state = {
      activeMarker: null,
      activeMarkerCenter: null
    };
    _this.handleMarkerClose = _this.handleMarkerClose.bind(_this);
    return _this;
  }

  MapComponent.prototype.render = function () {
    var _this = this;

    var markers = [];

    if (clinics && this.props.coords) {
      clinics.forEach(function (clinic, index) {
        if (clinic.lat && clinic.lng) {
          markers.push(React.createElement(_Marker.default, {
            type: clinic.name === _this.nearestClinic(_this.props.coords.latitude, _this.props.coords.longitude).name ? 'big' : 'small',
            lat: clinic.lat,
            lng: clinic.lng,
            handleMarkerClick: function handleMarkerClick(e, key) {
              return _this.handleMarkerClick(e, key, clinic.lat, clinic.lng);
            },
            handleClose: _this.handleMarkerClose,
            active: _this.state.activeMarker === index,
            key: index,
            index: index
          }));
        }
      });
      markers.push(React.createElement(_Marker.default, {
        type: 'geoLocation',
        lat: this.props.coords.latitude,
        lng: this.props.coords.longitude,
        key: markers.length + 1,
        index: markers.length + 1
      }));
    }

    var defaultCenter = {
      lat: 50.08804,
      lng: 14.42076
    };
    var defaultZoom = 7;
    return React.createElement("div", {
      className: "fullWidthContainer"
    }, React.createElement("section", {
      className: 'map'
    }, React.createElement("div", {
      className: 'map__container'
    }, React.createElement("button", null, "Zobrazit v\u0161echny polikliniky")), React.createElement(_googleMapReact.default, {
      bootstrapURLKeys: {
        key: GoogleMapsApiKey
      },
      defaultCenter: defaultCenter,
      defaultZoom: defaultZoom,
      options: {
        scrollwheel: false
      },
      yesIWantToUseGoogleMapApiInternals: true,
      onGoogleApiLoaded: function onGoogleApiLoaded(_a) {
        var map = _a.map,
            maps = _a.maps;
        return _this.apiIsLoaded(map, maps, markers);
      }
    }, markers), this.state.activeMarker && React.createElement(_MapBox.default, null)));
  };

  return MapComponent;
}(React.Component);

var _default = (0, _reactGeolocated.geolocated)()(MapComponent);

exports.default = _default;