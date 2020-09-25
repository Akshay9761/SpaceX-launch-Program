import {
  REQUEST_SAPCEX_DATA, RECEIVE_SAPCEX_DATA,
  SET_YEAR_FILTER, SET_LAUNCH_FILTER, SET_LANDING_FILTER
} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isFetching: true,
  yearFilter: null,
  launchFilter: '',
  landingFilter: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SAPCEX_DATA: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_SAPCEX_DATA: {
      return { ...state, isFetching: false, data: action.payload };
    }
    case SET_YEAR_FILTER: {
      return { ...state, yearFilter: action.year }
    }
    case SET_LAUNCH_FILTER: {
      return { ...state, launchFilter: action.launch }
    }
    case SET_LANDING_FILTER: {
      return { ...state, landingFilter: action.landing }
    }
    default:
      return state;
  }
};
