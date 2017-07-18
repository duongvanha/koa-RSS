import React from 'react';
import { shallow } from 'enzyme';
import AppComponent from '../../components/app';

test('Component App render', () => {
    const appComponent = shallow(
        <AppComponent/>
    );

    expect(appComponent.text()).toEqual('<nav />');
});
