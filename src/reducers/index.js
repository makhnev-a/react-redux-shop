import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import phones from "./phones";
import phonesPage from './PhonesPage';
import phonePage from './PhonePage';

export default history => combineReducers({
    phones,
    phonesPage,
    phonePage,
    router: connectRouter(history)
});