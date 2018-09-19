import React from 'react';
import { shallow } from 'enzyme';
import { CategoryPosts } from '../../components/CategoryPosts';
import posts from '../fixtures/posts';

test('should render CategoryPosts component correctly', () => {
    const wrapper = shallow(<CategoryPosts posts={posts}/>);
    expect(wrapper).toMatchSnapshot();
});