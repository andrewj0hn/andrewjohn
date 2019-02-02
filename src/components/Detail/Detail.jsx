// @flow
import React, { Component } from 'react';
import projects from '../../data/projects';

type Props = {
  match: Object,
}

type State = {
  title: string,
  images: Array<string>,
}

class ProjectDetail extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
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
    const { title, images } = this.state;
    return (
      <div>
        <div className="Image">
          { images.map(image => (
            <img src={image} alt={title} />
          )) }
        </div>
      </div>
    )
  }
}

export default ProjectDetail;
