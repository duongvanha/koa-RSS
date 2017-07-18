import * as React from "react";
import { renderRoutes } from "react-router-config";
import HomeComponent from "./components/home.component";

const aComponent = (props) =>
    <div>
        a component
        {renderRoutes(props.route.routes)}
    </div>
;

const bComponent = (props) =>
    <div>
        b component
        {renderRoutes(props.route.routes)}
    </div>
;

const NotFoundComponent = (props) =>
    <div>
        404
    </div>
;

const routes = [
    {
        component: HomeComponent,
        routes   : [
            {
                path     : '/home/',
                exact    : true,
                component: aComponent
            },
            {
                path     : '/home/a',
                component: aComponent
            },
            {
                path     : '/home/b',
                component: bComponent
            }

        ]
    },
    {
        component: NotFoundComponent
    }
];

export default routes;
