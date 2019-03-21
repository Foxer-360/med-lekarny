/// <reference types="react" />
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
