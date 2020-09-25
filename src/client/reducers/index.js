import { combineReducers } from 'redux';
import spacexReducer from './spacexReducer';

export default combineReducers({
  spaceXLaunchData: spacexReducer
});
