import React from 'react';

const splitArray = (array, size: number, classes: string) => {
  let result = [];

  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    result[i] = (
      <div className={classes} key={i}>
        {array.slice((i * size), (i * size) + size)}
      </div>
    );
  }
  return result;
};

export default splitArray;