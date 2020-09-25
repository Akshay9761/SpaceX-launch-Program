import axios from 'axios';
import {
  ROOT, REQUEST_SAPCEX_DATA, RECEIVE_SAPCEX_DATA,
  SET_YEAR_FILTER, SET_LAUNCH_FILTER, SET_LANDING_FILTER
} from './types';

export const fetchAllSpaceX = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_SAPCEX_DATA });
    const res = await axios.get(`${ROOT}`);
    dispatch({ type: RECEIVE_SAPCEX_DATA, payload: res.data });
  } catch (e) {
    dispatch({ type: RECEIVE_SAPCEX_DATA, payload: [] });
  }
};

export const fetchSpaceXWithFilter = (year, launch, landing) => async dispatch => {
  try {
    dispatch({ type: REQUEST_SAPCEX_DATA });
    let url = ``
    if (year) {
      url += `&launch_year=${year}`
    }
    if (launch === true || launch === false) {
      url += `&launch_success=${launch}`
    }
    if (landing === true || landing === false) {
      url += `&land_success=${landing}`
    }
    const res = await axios.get(`${ROOT}${url}`);
    dispatch({ type: RECEIVE_SAPCEX_DATA, payload: res.data });
  } catch (e) {
    dispatch({ type: RECEIVE_SAPCEX_DATA, payload: [] });
  }
};

export function setYearFilter(year) {
  return { type: SET_YEAR_FILTER, year };
}

export function setLandingFilter(landing) {
  return { type: SET_LANDING_FILTER, landing };
}

export function setLaunchFilter(launch) {
  return { type: SET_LAUNCH_FILTER, launch };
}
