import * as React from 'react';
import ReviewElement from './components/ReviewElement';

interface Reviews {
  cite: string;
  image: LooseObject;
  starCount: number;
}

export interface ReviewsProps {
  data: {
    title: string;
    reviews: Reviews[];
  };
}

const Reviews = (props: ReviewsProps) => {
  const { title, reviews } = props.data;

  return (
    <section className={'reviews'}>
      <div className={'container'}>
        <div className={'reviews__divider'} />
        {title && <h3>{title}</h3>}
        <div className={'reviews__list grid'}>
          {reviews && reviews.map((review, i) => (
            <ReviewElement 
              key={i} 
              image={review.image} 
              cite={review.cite} 
              starCount={review.starCount} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;