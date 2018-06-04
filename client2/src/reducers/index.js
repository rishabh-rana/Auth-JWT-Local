import {combineReducers} from "redux";
import {reducer} from 'redux-form';
import authreducer from './reducer';

export default combineReducers({
  auth : authreducer,
  form : reducer
})
