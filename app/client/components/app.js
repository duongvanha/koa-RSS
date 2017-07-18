import React, { PureComponent } from 'react';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Nav from '../container/nav';

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Nav/>
            </div>
        );
    }
}
