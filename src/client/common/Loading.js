import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const Loading = () => <div className="container">
  <div className="loading-container">
    <Spinner animation="border" variant="dark" />
  </div>
</div>;