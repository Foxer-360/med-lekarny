"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var RecipeSectionHeader_1 = require("./components/RecipeSectionHeader");
var RecipePickupPick_1 = require("./components/RecipePickupPick/RecipePickupPick");
var RecipeOwnerInfo_1 = require("./components/RecipeOwnerInfo/RecipeOwnerInfo");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var queryString = require("query-string");
var pharmaPlaces_1 = require("./components/pharmaPlaces");
var RecipeReservation = /** @class */ (function (_super) {
    __extends(RecipeReservation, _super);
    function RecipeReservation(props) {
        var _this = _super.call(this, props) || this;
        _this.timeout = null;
        _this.pickupIdAndPlace = function (place) {
            var obj = pharmaPlaces_1.default.find(function (pharma) { return pharma.id === place; });
            return obj.id + " - " + obj.name;
        };
        _this.onSubmit = function () {
            var _a = _this.state, recipeOwner = _a.recipeOwner, note = _a.note, pickupPlace = _a.pickupPlace, recipeCodesArray = _a.recipeCodesArray, files = _a.files;
            var form = new FormData();
            var file = files.length > 0 ? files[0] : 'bez přílohy';
            form.set('file', file);
            form.set('pharmacy', pickupPlace);
            form.set('body', "eRecepty: " + recipeCodesArray.join(', ') + "\n\n pozn\u00E1mka: " + note + ",\n\n Kontakt: email: " + recipeOwner.email + ",\n\n tel: " + recipeOwner.phone + ",\n\n " + _this.pickupIdAndPlace(pickupPlace));
            Object.keys(recipeOwner).forEach(function (key) { return form.set(key, recipeOwner[key]); });
            axios_1.default({
                method: 'post',
                // url: 'http://localhost:3030/',
                url: 'https://www.pharmacentrum.cz/reservation/',
                data: form,
                headers: { 'Content-Type': 'multipart/form-data' },
            })
                .then(function () {
                return _this.setState({ formSubmited: true });
            })
                .catch(function (e) {
                alert('Stala se chyba.');
            });
        };
        _this.onLoadFileHandler = function (e) {
            var files = e.target.files;
            _this.setState({ files: Array.from(files) });
        };
        _this.updateRecipesArray = function (recipeCodesArray) {
            _this.setState({ recipeCodesArray: recipeCodesArray });
        };
        _this.updatePickupPlace = function (pickupPlace) {
            _this.setState({ pickupPlace: pickupPlace });
        };
        _this.updateOwnerInfo = function (recipeOwner) {
            _this.setState({ recipeOwner: recipeOwner });
        };
        _this.updateNote = function (note) {
            _this.setState({ note: note });
        };
        _this.buildSearchQuery = function () {
            var codes = _this.state.recipeCodesArray;
            var place = _this.state.pickupPlace;
            var searchQueryWithCodes = queryString.stringify({ codes: codes }, { arrayFormat: 'bracket' });
            var searchQueryWithPlace = queryString.stringify({ place: place });
            var searchQuery = "?" + searchQueryWithCodes + "&" + searchQueryWithPlace;
            return searchQuery;
        };
        _this.requiredInputs = function () {
            var _a = _this.state, files = _a.files, recipeCodesArray = _a.recipeCodesArray, pickupPlace = _a.pickupPlace, recipeOwner = _a.recipeOwner;
            var name = recipeOwner.name, phone = recipeOwner.phone, gdpr = recipeOwner.gdpr;
            if (recipeCodesArray.length < 1 && files.length < 1) {
                return false;
            }
            if (pickupPlace === '') {
                return false;
            }
            var ownerInfo = name && name.length > 0
                && phone && phone.length > 0
                && gdpr;
            if (ownerInfo) {
                return true;
            }
        };
        _this.setErrors = function (error) {
            _this.setState({
                errors: __assign({}, _this.state.errors, error)
            });
        };
        _this.validateName = function (name) {
            if (name.length < 5) {
                _this.setErrors({ name: 'Jméno musí být vyplněno' });
            }
            else {
                _this.setErrors({ name: '' });
            }
        };
        _this.validatePhone = function (phone) {
            var reg = /^\+\d{1,3}\d{1,14}(\s\d{1,13})?/g;
            if (reg.test(phone)) {
                _this.setErrors({ phone: '' });
            }
            else {
                _this.setErrors({ phone: 'Vyplňte prosím telefoní číslo (formát: +420XXXXXXXXX)' });
            }
        };
        _this.isFormValid = function () {
            var er = _this.state.errors;
            var codesBoolean = _this.requiredInputs();
            return codesBoolean && Object.keys(er).reduce(function (acc, field) { return acc && !er[field]; }, true);
        };
        _this.validateOwner = function (fieldName, value) {
            if (_this.timeout) {
                clearTimeout(_this.timeout);
            }
            _this.timeout = setTimeout(function () {
                switch (fieldName[0]) {
                    case 'name':
                        _this.validateName(value);
                        break;
                    case 'phone':
                        _this.validatePhone(value);
                        break;
                    default: return null;
                }
            }, 400);
        };
        _this.state = {
            recipeCodesArray: [],
            recipeOwner: {
                name: '',
                phone: '',
                email: '',
                contactByEmail: false,
                contactBySMS: true,
                gdpr: false
            },
            note: '',
            pickupPlace: '',
            files: [],
            errors: {
                pickupPlace: null,
                name: null,
                phone: null,
            },
            formSubmited: false,
        };
        return _this;
    }
    RecipeReservation.prototype.render = function () {
        var boData = this.props.data;
        if (this.state.formSubmited) {
            return (React.createElement(react_router_dom_1.Redirect, { to: "" + (this.props.data
                    && this.props.data.url
                    && this.props.data.url.url) + this.buildSearchQuery() }));
        }
        else {
            return (React.createElement("div", { className: "recipe-reservation-page" },
                React.createElement(RecipeSectionHeader_1.default, { updateNote: this.updateNote, note: this.state.note, recipesArray: this.state.recipeCodesArray, updateRecipesArray: this.updateRecipesArray, boData: boData, onLoadFileHandler: this.onLoadFileHandler, uploadedFiles: this.state.files }),
                React.createElement(RecipePickupPick_1.default, { pickupPlace: this.state.pickupPlace, boData: boData, updatePickupPlace: this.updatePickupPlace }),
                React.createElement(RecipeOwnerInfo_1.default, { owner: this.state.recipeOwner, boData: boData, updateMainComponent: this.updateOwnerInfo, errors: this.state.errors, validateOwner: this.validateOwner }),
                React.createElement("section", { className: "row recipe-owner-info submit-wrapper" }, this.isFormValid()
                    ? React.createElement("button", { onClick: this.onSubmit, type: "button", className: "btn recipe-btn submit-btn" }, "Odeslat rezervaci")
                    : React.createElement("button", { className: "btn recipe-btn submit-btn disabled", disabled: true }, boData.submitBtnText))));
        }
    };
    return RecipeReservation;
}(React.Component));
exports.default = RecipeReservation;
//# sourceMappingURL=RecipeReservation.js.map