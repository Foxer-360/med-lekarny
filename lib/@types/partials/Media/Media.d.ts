import * as React from 'react';
export interface MediaProps {
    type: string;
    width?: string;
    height?: string;
    data: any;
}
export interface MediaState {
}
declare class Media extends React.Component<MediaProps, MediaState> {
    constructor(props: MediaProps);
    setDimensions: (recommendedSizes: any) => any;
    renderAsImage: (data: any) => JSX.Element;
    renderAsVideoEmbed(data: any): JSX.Element;
    render(): JSX.Element;
}
export default Media;
