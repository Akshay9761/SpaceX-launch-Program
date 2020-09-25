import React from 'react';
import { Successful_Landing } from '../../common/constants'

function SucFulLandingFilter({
  handleLandingFilter,
  landingFilter
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 filter-name-conatiner">
          <p className="heading">Successful Landing</p></div>
        {
          Successful_Landing.map(landing => {
            return (
              <div key={landing.landing} className="col-6 col-md-6 chips-container">
                <p className="chips-des"
                  style={landingFilter === landing.landing ? {backgroundColor: '#7DB90E'} : null}
                  onClick={() => handleLandingFilter(landing.landing)}
                >
                  {landing.landing.toString()}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default SucFulLandingFilter;