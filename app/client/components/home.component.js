import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import { add } from "../actions";

class HomeComponent extends PureComponent {

    componentWillReceiveProps() {
        setTimeout(() => {
            this.props.add('componentWillReceiveProps');
        }, 500);
    }

    componentWillMount() {
        setTimeout(() => {
            this.props.add('componentWillMount');
        }, 500);
    }

    render() {
        return (
            <div>
                {/*<AppBar/>*/}
                <Link to='/home/a'>a component</Link>
                <Link to='/home/b'>b component</Link>
                <p>{this.props.text}</p>
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}

HomeComponent = connect(
    ({datas}) => datas,
    (dispatch, ownProps) => ({
        add: (text) => dispatch(add(text))
    })
)(HomeComponent);

export default HomeComponent;
