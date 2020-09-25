import React from 'react';
import { Years } from '../../common/constants'

function YearFilter({
  handleYearFilter,
  yearFilter
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 filter-name-conatiner">
          <p className="heading">Lauch Year{yearFilter}</p></div>
        {
          Years.map(year => {
            return (
              <div key={year} className="col-6 col-md-6 chips-container">
                <p className="chips-des"
                  style={yearFilter === year ? {backgroundColor: '#7DB90E'} : null}
                  onClick={() => handleYearFilter(year)}
                >
                  {year}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default YearFilter;