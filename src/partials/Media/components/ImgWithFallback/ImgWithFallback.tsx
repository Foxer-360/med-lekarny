import * as React from 'react';

export interface ImgWithFallbackProps {
  alt?: string;
  originalSrc?: string;
  baseUrl: string;
  recommendedSizes: LooseObject;
  originalData: LooseObject;
}

export interface ImgWithFallbackState {
  src: string;
  loading: boolean;
}

class ImgWithFallback extends React.Component<ImgWithFallbackProps, ImgWithFallbackState> {
  constructor(props: ImgWithFallbackProps) {
    super(props);

    this.state = {
      src: null,
      loading: true,
    };
  }

  createVariantIfDoesNotExist = () => {

    if (this.props.recommendedSizes) {
      fetch(`${process.env.REACT_APP_MEDIA_LIBRARY_SERVER}/createDimension`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.props.originalData.id,
          width: parseInt(this.props.recommendedSizes.width, 10),
          height: parseInt(this.props.recommendedSizes.height, 10),
        }),
      })
        .then(response => {
          // this.getSizedUrl();
        })
        .catch(() => {
          console.log('There was an error creating variant');
        });
    }
  }  

  getSizedUrl = (props) => {
    let sizedUrl = null;
    let sizes = props.recommendedSizes;
    let sizedFile = null;

    this.setState({
      loading: true,
    });

    if (sizes && sizes.width && sizes.height) {
      let filename = props.originalData.filename.split('.');
      filename[0] = filename[0] + '_' + sizes.width + '_' + sizes.height;
      filename = filename.join('.');

      // fetch(`${process.env.REACT_APP_MEDIA_LIBRARY_SERVER}/findByFilename?filename=${filename}`, {
      fetch(`${process.env.REACT_APP_MEDIA_LIBRARY_SERVER}/findByFilename?filename=${filename}`, {
        method: 'GET',
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data && data.files[0]) {
            sizedFile = data.files[0];
            sizedUrl =
              props.baseUrl + props.originalData.category + sizedFile.hash + '_' + sizedFile.filename;

            this.setState({
              src: sizedUrl,
            });
          } else {
            this.setState({
              src: props.originalSrc,
            });
            this.createVariantIfDoesNotExist();
          }
        })
        .catch(() => {
          this.setState({
            src: props.originalSrc,
          });
        });
    } else {
      this.setState({
        src: props.originalSrc,
      });
    }
  }

  loadImg(src: any) {
    if (src) {
      const img = new Image();

      img.src = src;

      img.onload = () => {
        this.setState({
          loading: false,
        });
      };

      img.onerror = err => {
        this.handleError();
      };
    }
  }

  componentDidMount() {
    this.getSizedUrl(this.props);
  }

  componentWillUpdate(nextProps: ImgWithFallbackProps, nextState: ImgWithFallbackState) {
    if (this.state.src !== nextState.src) {
      this.loadImg(nextState.src);
    }
    if (nextProps.originalSrc !== this.props.originalSrc) {
      this.getSizedUrl(nextProps);
    }
  }

  handleError = () => {
    this.createVariantIfDoesNotExist();

    this.setState({
      loading: true,
    });
  }

  public render() {
    const { alt } = this.props;

    if (this.state.loading) {
      return <div className={'mediaImageLoader'} />;
    } else {
      return <img className={'mediaImage'} alt={alt} src={this.state.src} />;
    }
  }
}

export default ImgWithFallback;