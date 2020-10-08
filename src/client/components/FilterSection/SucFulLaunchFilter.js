import React from 'react';
import { Successful_Launch } from '../../common/constants'

function SucFulLaunchFilter({
  handleLaunchFilter,
  launchFilter
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 filter-name-conatiner">
          <p className="heading">Successful Launch</p></div>
        {
          Successful_Launch.map(launch => {
            return (
              <div key={launch.launch} className="col-6 col-md-6 chips-container">
                <button className="chips-des"
                  style={launchFilter === launch.launch ? {backgroundColor: '#7DB90E'} : null}
                  onClick={() => handleLaunchFilter(launch.launch)}
                >
                  {launch.launch.toString()}
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default SucFulLaunchFilter;