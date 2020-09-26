import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import {
  fetchAllSpaceX, fetchSpaceXWithFilter,
  setLandingFilter, setLaunchFilter, setYearFilter
} from '../actions';
import SpaceXCard from '../components/Card/SpaceXCard';
import Filters from '../components/FilterSection/Filters';
import Loader from '../components/Loader';
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const HomePage = props => {

  const { spaceXLaunchData: { isFetching, data }, fetchAllSpaceX,
    yearfilter, launchFilter, landingFilter, fetchSpaceXWithFilter,
    setLandingFilter, setLaunchFilter, setYearFilter } = props;

  let query = useQuery();

  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>SpaceX Launch Program</title>
        <meta property="og:title" content="SpaceX Launch Program - Akshay Srivastava" />
        <meta
          name="description"
          content="SpaceX Launch Program Missions and their successfull landing &amp; launching"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
    );
  };

  const spaceXData = useMemo(() => {
    return data;
  }, [data, yearfilter, launchFilter, landingFilter])

  function getFiterData() {
    return {
      year: query.get('year'),
      landing: query.get('landing') === 'true' ? true : query.get('landing') === 'false' ? false : null,
      launch: query.get('launch') === 'true' ? true : query.get('launch') === 'false' ? false : null
    }
  }

  useEffect(() => {
    let filterData = getFiterData();
    const { year, launch, landing } = filterData;
    if (year && parseInt(year) !== yearfilter) {
      setYearFilter(parseInt(year));
    }
    if ((launch === true || launch === false) && launch !== launchFilter) {
      setLaunchFilter(launch);
    }
    if ((landing === true || landing === false) && landing !== landingFilter) {
      setLandingFilter(landing);
    }
  }, [yearfilter, launchFilter, landingFilter])

  useEffect(() => {
    window.scrollTo(0, 0);
    let filterData = getFiterData();
    const { year, launch, landing } = filterData;
    if (year && parseInt(year) && yearfilter) {
      fetchSpaceXWithFilter(parseInt(year), launch, landing);
    } else if ((launch === true || launch === false) && launchFilter) {
      fetchSpaceXWithFilter(parseInt(year), launch, landing);
    } else if ((landing === true || landing === false) && landingFilter) {
      fetchSpaceXWithFilter(parseInt(year), launch, landing);
    } else {
      if (data && data.length === 0 && !year && !launch && !landing) fetchAllSpaceX()
    }
  }, [yearfilter, launchFilter, landingFilter])

  return (
    <div className="container spacex-launch-container">
      {head()}
      {
        isFetching && <Loader />
      }
      <div className="row spacex-launch-row">
        <div className="col-12"><h3 className="SpaceX-heading">SpaceX Launch Program</h3></div>
        <div className="col-md-3 filter-section">
          <Filters />
        </div>
        <div className="col-12 col-md-9 space-launch-section">
          <div className="row spacex-rows">
            {
              spaceXData.map(spacex => {
                return (
                  <div key={spacex.flight_number} className="col-12 col-md-6 col-lg-3">
                    <SpaceXCard spacex={spacex} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    spaceXLaunchData: state.spaceXLaunchData,
    yearfilter: state.spaceXLaunchData.yearFilter,
    launchFilter: state.spaceXLaunchData.launchFilter,
    landingFilter: state.spaceXLaunchData.landingFilter
  };
};

const mapDispatchToProps = {
  fetchAllSpaceX,
  fetchSpaceXWithFilter,
  setLandingFilter,
  setLaunchFilter,
  setYearFilter
};


HomePage.propTypes = {
  spaceXLaunchData: PropTypes.object,
  fetchAllSpaceX: PropTypes.func,
  fetchSpaceXWithFilter: PropTypes.func,
  setLandingFilter: PropTypes.func,
  setLaunchFilter: PropTypes.func,
  setYearFilter: PropTypes.func
};

HomePage.defaultProps = {
  spaceXLaunchData: [],
  fetchAllSpaceX: null,
  fetchSpaceXWithFilter: null,
  setLandingFilter: null,
  setLaunchFilter: null,
  setYearFilter: null
};

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
};
