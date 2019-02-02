// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../Images';
import Skills from '../Skills';
import * as ROUTES from '../../constants/Routes';
import './ListDetail.css';

type Props = {
  id: number,
  title: string,
  text: string,
  images: Array<string>,
  skills: Array<string>,
};

const ListDetail = ({ id, title, text, images, skills }: Props) => (
  <div>
    <Link to={`${ROUTES.DETAIL}/${id}`} className="ListDetail">
      <div className="Title">
        <h2>{title}</h2>
      </div>
      <Images images={images} title={title} />
    </Link>
    <Skills skills={skills} />
  </div>
);

export default ListDetail;
