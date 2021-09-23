import { Switch, Route } from "react-router-dom";
import { Alert } from "./alert";
import { Avatar } from "./avatar";
import { Buttons } from "./button";
import { Home } from "./home";

export function AppContent(){
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/alert">
                <Alert/>
            </Route>
            <Route path="/avatar">
                <Avatar/>
            </Route>
            <Route path="/buttons">
                <Buttons/>
            </Route>
        </Switch>
    )
}