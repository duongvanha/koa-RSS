import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import '../style/app.css';

export default class App extends Component {
    render() {
        return (
            <AppBar
                title="Title"
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={<input type="text"/>}
            />
        );
    }
}