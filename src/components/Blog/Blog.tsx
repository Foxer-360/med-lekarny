import * as React from 'react';
import Masonry from 'react-masonry-css';

import List from '../List';
import { BlogCard } from './components/blogCard';
import SearchBar from '../SearchBar/SearchBar';

interface BlogItem {
  title: string;
  text: string;
  img: LooseObject;
  color: string;
  textColor: string;
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
  blogItems: any;
  sixBlogItems: any;
}

export default class Blog extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);

    this.state = {
      showMore: false,
      blogItems: this.props.data.blogItems,
      sixBlogItems: []
    };
  }

  renderSixItems(data: any) {
    let result = [];

    data.map((item, index) => (
      result.push(
        <BlogCard
          title={item.title}
          text={item.text}
          key={index}
          color={item.color}
          textColor={item.textColor}
          img={item.img}
          special={item.special && item.special}
        />)));
    
    if (data.length <= 6) {
      return result.slice(0, data.length);
    } else {
      return result.slice(0, 6);
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.state.blogItems !== nextProps.data.blogItems) {
      this.setState({ blogItems: nextProps.data.blogItems });
    }
  }

  public render() {
    const { title, displaySearch } = this.props.data;
    const { showMore } = this.state;

    return (
      <List data={this.state.blogItems}>
        {({ data }) => {

          return (
            <section className={'blog'}>
              <div className="container">
                {title && <h1 style={displaySearch ? {paddingBottom: 0} : {}}>{title}</h1>}
      
                {displaySearch && <SearchBar placeholder={'Vyhledat téma'} barColor={'gray'} />}
      
                <Masonry
                  breakpointCols={{ default: 3, 4000: 3, 800: 2, 500: 1 }}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {data && !showMore ? this.renderSixItems(data) :
                    data.map((item, i) => (
                      <BlogCard
                        key={i}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                        color={item.color}
                        textColor={item.textColor}
                        special={item.special && item.special}
                      />
                  ))}
                </Masonry>
      
                <div className={'blog__blur'}>
                  <div />
                </div>
      
                {this.state.blogItems && this.state.blogItems.length > 6 && 
                  <div className="blog__btnHolder">
                    <button 
                      className={`btn btn--greenBkg btn--fullWidth btn--${
                        showMore && data.length > 6 ? 'up' : 'down'}`} 
                      onClick={() => this.setState({ showMore: !this.state.showMore })}
                    >
                      Načíst další<span className="arrow" />
                    </button>
                  </div>
                }
              </div>
            </section>
          );
        }}
      </List>
    );
  }
}
