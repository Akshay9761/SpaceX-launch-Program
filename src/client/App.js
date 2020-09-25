import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import ErrorBoundary from './components/ErrorBoundary';

const App = ({ route }) => {
  return (
    <React.Fragment>
      <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
    </React.Fragment>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any)
};

App.defaultProps = {
  route: null
};

export default {
  component: App
};
