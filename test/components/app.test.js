import {renderComponent, expect} from '../test_helper';
import App from '../../client/components/app';

describe('App', () => {

    it('shows the correct text', () => {
        const component = renderComponent(App);

        expect(component).to.contain('Demo testing for react')
    });
});