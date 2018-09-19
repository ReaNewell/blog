import React from 'react';
import { shallow } from 'enzyme';
import { CategoryPage } from '../../components/CategoryPage';
import posts from '../fixtures/posts';
import categoryFilter from '../../selectors/categoryFilter';

test('should render CategoryPage component correctly', () => {
    const category = 'html';
    const wrapper = shallow(<CategoryPage posts={categoryFilter(posts, category)} category={category}/>);
    expect(wrapper).toMatchSnapshot();
});