import React from 'react';
import { shallow } from 'enzyme';
import { EditPostPage } from '../../../components/admin/EditPostPage';
import posts from '../../fixtures/posts';

test('should render EditPostPage component correctly when current post is selected', () => {
  const wrapper = shallow(<EditPostPage posts={posts} currentPost={posts[1]} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('h2').at(0).text()).toBe('Make changes to article, then save.');
});

test('should render EditPostPage component correctly when current post is not selected', () => {
  const wrapper = shallow(<EditPostPage posts={posts} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('h2').at(0).text()).toBe('Posted Articles');
});