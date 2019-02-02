// @flow
import React, { Component } from 'react';
import Images from '../Images';
import Skills from '../Skills';
import projects from '../../data/projects';

type Props = {
  match: Object,
}

type State = {
  title: string,
  text: string,
  images: Array<string>,
  skills: Array<string>,
}

class Detail extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      skills: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const project = projects.find(project => project.id == id);
    this.setState({ ...project });
    document.title = project.title;
  }

  render() {
    const { title, text, images, skills } = this.state;
    return (
      <div className="Detail">
        <h1>{title}</h1>
        <p>{text}</p>
        <Images height="500px" title={title} images={images} />
        <Skills skills={skills} />
      </div>
    )
  }
}

export default Detail;
