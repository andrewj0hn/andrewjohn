// @flow
import React, { Component } from 'react';
import homeProjects from '../../data/home';
import digitalEnterprisesProjects from '../../data/digital_enterprises';
import hogeschoolVanAmsterdamProjects from '../../data/hogeschool_van_amsterdam';
import diyProjects from '../../data/diy_projects';
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
      return homeProjects;
    case ROUTES.DIGITAL_ENTERPRISES:
      return digitalEnterprisesProjects;
    case ROUTES.HOGESCHOOL_VAN_AMSTERDAM:
      return hogeschoolVanAmsterdamProjects;
    case ROUTES.OWN_WORK:
      return diyProjects;
    default:
      return homeProjects;
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
