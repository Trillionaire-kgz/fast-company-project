import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Navbar from "./components/navbar";
import User from "./layouts/user";
import UsersLayout from "./components/usersLayout";

const App = () => {
    return (
        <>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/login" component={Login} />
                    <Route path="/users/:userId?" component={UsersLayout} />
                    <Route path="/users" component={User} />
                </Switch>
            </div>
        </>
    );
};

export default App;
