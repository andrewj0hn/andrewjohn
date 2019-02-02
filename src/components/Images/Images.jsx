// @flow
import React from 'react';
import './Images.css';

type Props = {
  height: string,
  title: string,
  images: Array<string>,
}

const Images = ({ height = '250px', title, images }: Props) => (
  <div className="Images" style={{
    height,
    gridTemplateColumns: `repeat(${images.length}, 1fr)`
  }}>
    { images.map(image => (
      <img src={image} alt={title} key={image} style={{ height }} />
    )) }
  </div>
);

export default Images;

