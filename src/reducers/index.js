import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import phones from "./phones";
import phonesPage from './PhonesPage';

export default history => combineReducers({
    phones,
    phonesPage,
    router: connectRouter(history)
});