import React from 'react';
import { shallow } from 'enzyme';
import { ArticlePage } from '../../components/ArticlePage';
import posts from '../fixtures/posts';

test('should render ArticlePage component correctly', () => {
    const wrapper = shallow(<ArticlePage post={posts[0]} moreArticles={posts}/>, {disableLifecycleMethods: true});
    expect(wrapper).toMatchSnapshot();
});