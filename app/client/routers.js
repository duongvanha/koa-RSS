import * as React from "react";
import { renderRoutes } from "react-router-config";
import HomeComponent from "./components/home.component";
import FormComponent from "./components/form.component";

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

const DemoForm = (props) =>
    <FormComponent onSubmit={console.log}/>
;

const routes = [
    {
        component: HomeComponent,
        routes   : [
            {
                path     : '/home/',
                exact    : true,
                component: DemoForm
            },
            {
                path     : '/home/a',
                component: DemoForm
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
