// @flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import navigation from '../../constants/Navigation';
import * as ROUTES from '../../constants/Routes';

type Props = {
  location: Object,
}

type State = {
  pathname: string,
}

class Header extends Component<Props, State> {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { location } = this.props;
    const { pathname } = location;
    this.setState({ pathname: pathname });
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const { pathname } = location;
    if (location !== prevProps.location) {
      this.setState({ pathname: pathname });
    }
  }

  render() {
    const { pathname } = this.state;
    return (
      <div className="Header">
        <Link to={ROUTES.HOME} className="Logo">
          <h1>Andrew John</h1>
        </Link>
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
