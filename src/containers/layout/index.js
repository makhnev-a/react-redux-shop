import React from 'react';
import {Switch, Route} from "react-router";
import Phones from "../Phones";

const routes = (
    <Switch>
        <Route path={'/'} component={Phones} exact/>
    </Switch>
);

const Layout = () => {
    return (
        <div>{routes}</div>
    );
}

export default Layout;