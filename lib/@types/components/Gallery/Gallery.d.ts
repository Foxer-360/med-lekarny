/// <reference types="react" />
import 'react-alice-carousel/lib/alice-carousel.css';
interface Slide {
    image: LooseObject;
}
export interface GalleryProps {
    data: {
        slides: Slide[];
    };
}
declare const Gallery: (props: GalleryProps) => JSX.Element;
export default Gallery;
