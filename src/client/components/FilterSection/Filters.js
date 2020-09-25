import React, { useState } from 'react';
import YearFilter from './YearFilter';
import SucFulLaunchFilter from './SucFulLaunchFilter';
import SucFulLandingFilter from './SucFulLandingFilter';
import { connect } from 'react-redux';
import { setLandingFilter, setLaunchFilter, setYearFilter } from '../../actions/index';
import history from '../../history';
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Filters({
  setLandingFilter,
  setLaunchFilter,
  setYearFilter,
  yearFilter,
  launchFilter,
  landingFilter
}) {

  let query = useQuery();

  function formQueryParams ({year, landing, launch}) {
    let queryParams = '';
    if (year) {
      queryParams += `&year=${year}` 
    }
    if ((launch === true || launch === false) || (launch === 'true' || launch === 'false')) {
      queryParams += `&launch=${launch}` 
    }
    if ((landing === true || landing === false) || (landing === 'true' || landing === 'false')) {
      queryParams += `&landing=${landing}` 
    }
    return queryParams;
  }

  function getFiterData() {
    return {
      year: query.get('year'),
      landing: query.get('landing'),
      launch: query.get('launch')
    }
  }

  const handleYearFilter = (year) => {
    setYearFilter(year);
    let filterData = getFiterData();
    filterData.year = year;
    history.push({
      pathname: '/',
      search: formQueryParams(filterData)
    });
  }

  const handleLaunchFilter = (launch) => {
    setLaunchFilter(launch)
    let filterData = getFiterData();
    filterData.launch = launch;
    history.push({
      pathname: '/',
      search: formQueryParams(filterData)
    });
  }

  const handleLandingFilter = (landing) => {
    setLandingFilter(landing)
    let filterData = getFiterData();
    filterData.landing = landing;
    history.push({
      pathname: '/',
      search: formQueryParams(filterData)
    });
  }

  return (
    <div className="container position-filter">
      <div className="row filters-section">
        <div className="col-md-12"><h3 className="filters-heading">Filters</h3></div>
        <YearFilter handleYearFilter={handleYearFilter} yearFilter={yearFilter} />
        <SucFulLaunchFilter handleLaunchFilter={handleLaunchFilter} launchFilter={launchFilter} />
        <SucFulLandingFilter handleLandingFilter={handleLandingFilter} landingFilter={landingFilter} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    yearFilter: state.spaceXLaunchData.yearFilter,
    launchFilter: state.spaceXLaunchData.launchFilter,
    landingFilter: state.spaceXLaunchData.landingFilter
  };
};

const mapDispatchToProps = {
  setLandingFilter,
  setLaunchFilter,
  setYearFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
