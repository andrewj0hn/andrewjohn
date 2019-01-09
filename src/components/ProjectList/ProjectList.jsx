// @flow
import React, { Component } from 'react';
import data from '../../data/projects';
import ProjectListDetail from '../ProjectListDetail';
import * as ROUTES from '../../constants/Routes';
import './ProjectList.css';

type Props = {
  location: Object,
}

type State = {
  projects: Array<Object>,
}

const getProjects = (pathname: string) => {
  switch (pathname) {
    case ROUTES.HOME:
      return data.filter(({ categories }) => categories.indexOf(1) !== -1);
    case ROUTES.DIGITAL_ENTERPRISES:
      return data.filter(({ categories }) => categories.indexOf(2) !== -1);
    case ROUTES.HOGESCHOOL_VAN_AMSTERDAM:
      return data.filter(({ categories }) => categories.indexOf(3) !== -1);
    case ROUTES.OWN_WORK:
      return data.filter(({ categories }) => categories.indexOf(4) !== -1);
    default:
      return data;
  }
}

class ProjectList extends Component<Props, State> {
  constructor(props: Object) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const { pathname } = location;
    const projects = getProjects(pathname);
    this.setState({ projects });
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="Grid">
        { projects.map(project => (
          <ProjectListDetail key={project.id} {...project} />
        ))}
      </div>
    );
  }
}

export default ProjectList;
