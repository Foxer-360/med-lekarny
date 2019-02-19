import * as React from 'react';
import PcTitle from './components/title';
import Button from '../../partials/Button';
import Media from '../../partials/Media';
import ReactMarkdown from 'react-markdown';
var PharmaciesList = function (props) {
    var pharmacies = props.data.pharmacies;
    return (React.createElement("section", { className: "polyclinicsList" }, pharmacies &&
        pharmacies.map(function (pharmacie, index) { return (React.createElement("div", { className: 'pcitem', key: index },
            React.createElement("div", { className: "fullWidthContainer" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "pcitem__wrapper" },
                        React.createElement("div", { className: 'pcitem__img' }, pharmacie.image && React.createElement(Media, { data: pharmacie.image, type: "image" })),
                        React.createElement("div", { className: 'pcitem__info' },
                            React.createElement(PcTitle, { name: pharmacie.name && pharmacie.name }),
                            React.createElement("div", { className: "pcitem__info__details" },
                                React.createElement("div", { className: "pcitem__info__details__item" },
                                    React.createElement("img", { src: "../../../assets/mediconLekarny/images/geoIcon.png", alt: "Medicon GeoLocation Icon" }),
                                    React.createElement("p", null,
                                        pharmacie.address && pharmacie.address,
                                        " ",
                                        React.createElement("br", null),
                                        pharmacie.district && pharmacie.district)),
                                React.createElement("div", { className: "pcitem__info__details__item" },
                                    React.createElement("img", { src: "../../../assets/mediconLekarny/images/phoneIcon.png", alt: "Medicon Phone Icon" }),
                                    React.createElement("p", null, pharmacie.phone && pharmacie.phone)),
                                React.createElement("div", { className: "pcitem__info__details__item" },
                                    pharmacie.transportImage && React.createElement(Media, { data: pharmacie.transportImage, type: "image" }),
                                    !pharmacie.transportImage &&
                                        React.createElement("img", { src: "../../../assets/mediconLekarny/images/metro2.png", alt: "" }),
                                    React.createElement("p", null,
                                        pharmacie.transport && pharmacie.transport,
                                        React.createElement("br", null),
                                        pharmacie.station && pharmacie.station))),
                            pharmacie.services &&
                                React.createElement("div", { className: 'pcitem__info__list' },
                                    React.createElement(ReactMarkdown, { source: pharmacie.services, renderers: {
                                            paragraph: function (rProps) { return React.createElement("ul", null, rProps.children); },
                                        } })),
                            pharmacie.description &&
                                React.createElement("div", { className: 'pcitem__info__desc' },
                                    React.createElement("div", { className: 'pcitem__info__desc__txt' },
                                        React.createElement(ReactMarkdown, { source: pharmacie.description, renderers: {
                                                paragraph: function (rProps) { return React.createElement("p", null, rProps.children); },
                                            } }))),
                            React.createElement("div", { className: 'pcitem__info__btnHolder' },
                                React.createElement(Button, { classes: "btn btn--greenBorder" }, "vice info")))))))); })));
};
export default PharmaciesList;
//# sourceMappingURL=PharmaciesList.js.map