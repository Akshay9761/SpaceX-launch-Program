import React from 'react';

function Loader(props) {
  return (
    <React.Fragment>
      <div className="wrapper">
      </div>
      <div className="overlay show"></div>
      <div className="spanner show">
        <div className="loader"></div>
        <p>Loading... please be patient.</p>
      </div>
    </React.Fragment>
  );
}

export default Loader;