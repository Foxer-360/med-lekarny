import * as React from 'react';
import { isObjectLike } from 'lodash';
import WebFont from 'webfontloader';
import {
  Dummy,
  AlertNotFound,
  Hero,
  Header,
  CrossRoads,
  Benefits,
  Highlight,
  Footer,
  Reviews,
  TextBlock,
  Map,
  InfoBoxes,
  DoctorList,
  PharmaciesList,
  ExpertiseList,
  InfoRectangles,
  PharmacieInfo,
  Blog,
  PolyclinicBoxes,
  DoctorCard,
  Odbornost,
  MyProblem,
  JobPositions,
  JobOffers,
  CareerForm,
  ExpertiseDescription,
  MedicalGroup,
  Timeline,
  ViewsAboutUs,
  ContactInfo,
  ContactForm,
  Downloads,
  ContactsBlock,
  Faq,
  Pharmacies,
  MenuBlocks,
  PromotionPreviews,
  Carousel,
  Headline,
  CustomInfoBoxes,
} from '../../components';
import * as resources from './resources';

// WEB FONTS
WebFont.load({
  google: {
    families: ['Montserrat:400,500,600,700:latin-ext'],
  },
});

/**
 *
 */
class ComponentsService {
  Types: LooseObject<string> = {
    DUMMY: 'Dummy',
    HERO: 'Hero',
    HEADER: 'Header',
    CROSSROADS: 'CrossRoads',
    BENEFITS: 'Benefits',
    HIGHLIGHT: 'Highlight',
    FOOTER: 'Footer',
    REVIEWS: 'Reviews',
    TEXTBLOCK: 'TextBlock',
    INFOBOXES: 'InfoBoxes',
    MAP: 'Map',
    DOCTORLIST: 'DoctorList',
    PHARMACIESLIST: 'PharmaciesList',
    EXPERTISELIST: 'ExpertiseList',
    INFORECTANGLES: 'InfoRectangles',
    POLYCLINICINFO: 'PolyclinicInfo',
    BLOG: 'Blog',
    POLYCLINICBOXES: 'PolyclinicBoxes',
    DOCTORCARD: 'DoctorCard',
    ODBORNOST: 'Odbornost',
    MYPROBLEM: 'MyProblem',
    JOBPOSITIONS: 'JobPositions',
    JOBOFFERS: 'JobOffers',
    CAREERFORM: 'CareerForm',
    EXPERTISEDESCRIPTION: 'ExpertiseDescription',
    MEDICALGROUP: 'MedicalGroup',
    TIMELINE: 'Timeline',
    VIEWSABOUTUS: 'ViewsAboutUs',
    CONTACTINFO: 'ContactInfo',
    CONTACTFORM: 'ContactForm',
    DOWNLOADS: 'Downloads',
    CONTACTSBLOCK: 'ContactsBlock',
    FAQ: 'Faq',
    PHARMACIES: 'Pharmacies',
    MENUBLOCKS: 'MenuBlocks',
    PROMOTIONPREVIEWS: 'PromotionPreviews',
    CAROUSEL: 'Carousel',
    HEADLINE: 'Headline',
    CUSTOMINFOBOXES: 'CustomInfoBoxes',
    PHARMACIEINFO: 'PharmacieInfo',
  };

  /***/
  getAllowedTypes() {
    const res = Object.keys(this.Types).map(key => {
      return this.Types[key];
    });

    return res;
  }

  /***/
  getComponent(type: string) {
    switch (type) {
      case this.Types.DUMMY:
        return Dummy;
      case this.Types.HEADER:
        return Header;
      case this.Types.HERO:
        return Hero;
      case this.Types.CROSSROADS:
        return CrossRoads;
      case this.Types.BENEFITS:
        return Benefits;
      case this.Types.HIGHLIGHT:
        return Highlight;
      case this.Types.FOOTER:
        return Footer;
      case this.Types.REVIEWS:
        return Reviews;
      case this.Types.TEXTBLOCK:
        return TextBlock;
      case this.Types.MAP:
        return Map;
      case this.Types.INFOBOXES:
        return InfoBoxes;
      case this.Types.DOCTORLIST:
        return DoctorList;
      case this.Types.PHARMACIESLIST:
        return PharmaciesList;
      case this.Types.EXPERTISELIST:
        return ExpertiseList;
      case this.Types.INFORECTANGLES:
        return InfoRectangles;
      case this.Types.BLOG:
        return Blog;
      case this.Types.POLYCLINICBOXES:
        return PolyclinicBoxes;
      case this.Types.DOCTORCARD:
        return DoctorCard;
      case this.Types.ODBORNOST:
        return Odbornost;
      case this.Types.MYPROBLEM:
        return MyProblem;
      case this.Types.JOBPOSITIONS:
        return JobPositions;
      case this.Types.JOBOFFERS:
        return JobOffers;
      case this.Types.CAREERFORM:
        return CareerForm;
      case this.Types.EXPERTISEDESCRIPTION:
        return ExpertiseDescription;
      case this.Types.MEDICALGROUP:
        return MedicalGroup;
      case this.Types.TIMELINE:
        return Timeline;
      case this.Types.VIEWSABOUTUS:
        return ViewsAboutUs;
      case this.Types.CONTACTINFO:
        return ContactInfo;
      case this.Types.CONTACTFORM:
        return ContactForm;
      case this.Types.DOWNLOADS:
        return Downloads;
      case this.Types.CONTACTSBLOCK:
        return ContactsBlock;
      case this.Types.FAQ:
        return Faq;
      case this.Types.PHARMACIES:
        return Pharmacies;
      case this.Types.MENUBLOCKS:
        return MenuBlocks;
      case this.Types.PROMOTIONPREVIEWS:
        return PromotionPreviews;
      case this.Types.CAROUSEL:
        return Carousel;
      case this.Types.HEADLINE:
        return Headline;
      case this.Types.CUSTOMINFOBOXES:
        return CustomInfoBoxes;
      case this.Types.PHARMACIEINFO:
        return PharmacieInfo;

      default:
        return () => <AlertNotFound type="component" />;
    }
  }

  /***/
  getComponentResource(type: string) {
    let res = resources.default;
    const typedRes: LooseObject = resources[type.toLowerCase()];
    if (isObjectLike(typedRes)) {
      res = {
        ...res,
        ...typedRes,
      };
    }

    return res;
  }

  getForm(type: string) {
    switch (type) {
      default:
        return () => <AlertNotFound type="form" />;
    }
  }
}

export default ComponentsService;