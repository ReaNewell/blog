import React from 'react';
import { shallow } from 'enzyme';
import { SideBar } from '../../components/SideBar';
import categories from '../fixtures/categories';

test('should render SideBar component correctly', () => {
    const wrapper = shallow(<SideBar categories={categories}/>);
    expect(wrapper).toMatchSnapshot();
});