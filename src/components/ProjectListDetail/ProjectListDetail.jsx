// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import './ProjectListDetail.css';

type Props = {
  id: number,
  title: string,
  text: string,
  image: Array<string>,
};

const ProjectListDetail = ({ id, title, text, image }: Props) => (
  <Link to={`${ROUTES.DETAIL}/${id}`} className="ProjectListDetail">
    <div className="Title">
      <h2>{title}</h2>
    </div>
    <div className="Image">
      <img src={image} alt={title} />
    </div>
  </Link>
);

export default ProjectListDetail;
