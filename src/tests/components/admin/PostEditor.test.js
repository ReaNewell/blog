import React from 'react';
import { shallow } from 'enzyme';
import { PostEditor } from '../../../components/admin/PostEditor';
import posts from '../../fixtures/posts';

let startAddPost, startUpdatePost, wrapper;
const post = posts[1]

beforeEach(() => {
  startAddPost = jest.fn();
  startUpdatePost = jest.fn();
  wrapper = shallow(<PostEditor startAddPost={startAddPost} startUpdatePost={startUpdatePost} />, {disableLifecycleMethods: true} );
});

test('should render PostEditor component correctly with default values', () => {
  const wrapper = shallow(<PostEditor startAddPost={startAddPost} startUpdatePost={startUpdatePost} />, {disableLifecycleMethods: true} );
  expect(wrapper).toMatchSnapshot();
});

test('should render PostEditor component correctly with given values', () => {
  wrapper = shallow(<PostEditor post={post} startAddPost={startAddPost} startUpdatePost={startUpdatePost} updating={true}/>, {disableLifecycleMethods: true} );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.state('title')).toBe('Title Two');
  expect(wrapper.state('html')).toBe('This is the second blog post.');
  expect(wrapper.state('updating')).toBe(true);
});

test('should change title on change', () => {
  const value = 'The New Title';
  wrapper.find('input').at(0).simulate('change', { target: {value} });
  expect(wrapper.state('title')).toBe(value);
})

// test('should show error if no title or body is entered', () => {
//   wrapper.find('button').at(0).simulate('click');
//   expect(wrapper.find('p').at(0).exists).toBe(true);
// });