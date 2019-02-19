import * as React from 'react';
import Masonry from 'react-masonry-css';
import { BlogCard } from './components/blogCard';
import SearchBar from '../SearchBar/SearchBar';

interface BlogItem {
  title: string;
  text: string;
  img: LooseObject;
  color: string;
  special?: boolean;
}

export interface BlogProps {
  data: {
    title: string;
    displaySearch: boolean;
    blogItems: BlogItem[];
  };
}

export interface BlogState {
  showMore: boolean;
}

export default class Blog extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);

    this.state = {
      showMore: false
    };
  }

  public render() {
    const { title, displaySearch, blogItems } = this.props.data;
    const blogCards = [];
    let sixBlogCards = [];

    if (blogItems && blogItems.length > 1) {
      blogItems.map((item, index) => (
        blogCards.push(
          <BlogCard
            title={item.title}
            text={item.text}
            key={index}
            color={item.color}
            img={item.img}
            special={item.special && item.special}
          />)
      ));

      sixBlogCards = blogCards.slice(0, 6);
    }

    return (
      <section className={'blog'}>
        <div className="container">
          {title && <h1>{title}</h1>}

          {displaySearch && <SearchBar placeholder={'Vyhledat téma'} barColor={'gray'} />}

          <Masonry
            breakpointCols={{ default: 3, 4000: 3, 800: 2, 500: 1 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {this.state.showMore ? (blogCards) : (sixBlogCards)}
          </Masonry>

          <div className={'blog__blur'}>
            <div />
          </div>

          <div className="blog__btnHolder">
            <button 
              className={`btn btn--greenBkg btn--fullWidth btn--${
                this.state.showMore && blogItems.length > 6 ? 'up' : 'down'}`} 
              onClick={() => this.setState({ showMore: !this.state.showMore })}
            >
              Načíst další<span className="arrow" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}
