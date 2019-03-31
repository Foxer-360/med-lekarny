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
  numberOfPage: number;
}

export default class Blog extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);

    this.state = {
      numberOfPage: 1
    };
  }

  public render() {
    const { title, displaySearch, blogItems } = this.props.data;

    return (
      <List data={blogItems}>
        {({ getPage }) => {
          const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 6);

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
                  {items && items.map((item, i) => (
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

                {this.state.numberOfPage < lastPage &&
                  <div className="blog__btnHolder">
                    <button 
                      className={`btn btn--greenBkg btn--fullWidth`} 
                      onClick={() => this.setState({ numberOfPage: this.state.numberOfPage + 1 })}
                    >
                      Načíst další
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
