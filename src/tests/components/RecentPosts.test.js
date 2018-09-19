import React from 'react';
import { shallow } from 'enzyme';
import { RecentPosts } from '../../components/RecentPosts';
import posts from '../fixtures/posts';

test('should render RecentPosts component correctly', () => {
    const wrapper = shallow(<RecentPosts posts={posts} />);
    expect(wrapper).toMatchSnapshot();
});