import * as React from "react";
import { renderRoutes } from "react-router-config";

const Layout = (props) =>
    <div>
        layout
        {renderRoutes(props.route.routes)}
    </div>
;

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
        khong co component
    </div>
;

const routes = [
    {
        path     : '/home',
        component: Layout,
        routes   : [
            {
                path     : '/home/',
                exact    : true,
                component: aComponent
            },
            {
                path     : '/home/a',
                component: aComponent,
                // routes   : [
                //     {
                //         path     : '/child/:id/grand-child',
                //         component: GrandChild
                //     }
                // ]
            },
            {
                path     : '/home/b',
                component: bComponent,
                // routes   : [
                //     {
                //         path     : '/child/:id/grand-child',
                //         component: GrandChild
                //     }
                // ]
            }

        ]
    },
    {
        component: NotFoundComponent
    }
];

export default routes;
