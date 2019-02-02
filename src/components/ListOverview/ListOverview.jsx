// @flow
import React, { Component } from 'react';
import data from '../../data/projects';
import ListDetail from '../ListDetail';
import * as ROUTES from '../../constants/Routes';
import * as STRINGS from '../../constants/Strings';
import './ListOverview.css';

type Props = {
  location: Object,
}

type State = {
  projects: Array<Object>,
}

const getScreenTitle = (pathname: string) => {
  switch (pathname) {
    case ROUTES.HOME:
      return STRINGS.HOME;
    case ROUTES.DIGITAL_ENTERPRISES:
      return STRINGS.DIGITAL_ENTERPRISES;
    case ROUTES.HOGESCHOOL_VAN_AMSTERDAM:
      return STRINGS.HOGESCHOOL_VAN_AMSTERDAM;
    case ROUTES.OWN_WORK:
      return STRINGS.OWN_WORK;
    case ROUTES.CONTACT:
      return STRINGS.CONTACT;
    default:
      return STRINGS.HOME;
  }
};

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

class ListOverview extends Component<Props, State> {
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
    document.title = getScreenTitle(pathname);
    this.setState({ projects });
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="Grid">
        { projects.map(project => (
          <ListDetail key={project.id} {...project} />
        ))}
      </div>
    );
  }
}

export default ListOverview;
