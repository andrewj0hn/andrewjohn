// @flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import navigation from '../../constants/Navigation';
import * as ROUTES from '../../constants/Routes';
import * as STRINGS from '../../constants/Strings';

type Props = {
  location: Object,
}

type State = {
  pathname: string,
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

class Header extends Component<Props, State> {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { location } = this.props;
    const { pathname } = location;
    document.title = getScreenTitle(pathname);
    this.setState({ pathname: pathname });
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const { pathname } = location;
    if (location !== prevProps.location) {
      document.title = getScreenTitle(pathname);
      this.setState({ pathname: pathname });
    }
  }

  render() {
    const { pathname } = this.state;
    return (
      <div className="Header">
        <h1>Andrew John</h1>
        <nav className="navigation">
          { navigation.map(({route, label}) => (
            <Link to={route} key={route} className={pathname === route ? 'active' : 'inactive'}>{label}</Link>
          )) }
          <a href="/" className="Menu">
            Menu
            <span className="top" />
            <span className="middle" />
            <span className="bottom" />
          </a>
        </nav>
      </div>
    );
  }
}

export default withRouter(props => <Header {...props} />);
