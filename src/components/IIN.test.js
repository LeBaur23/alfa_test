import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
    configure,
    shallow,
    ShallowWrapper,
} from 'enzyme';
import { IIN } from './IIN'

configure({adapter: new Adapter()});

describe('IIN', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<IIN />);
    });

    it('should render IIN component', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
});
