import React from 'react';
import { shallow } from 'enzyme';
import { SummarizedPost } from '../../components/SummarizedPost';
import posts from '../fixtures/posts';

test('should render SummarizedPost component correctly', () => {
    const wrapper = shallow(<SummarizedPost post={posts[1]}/>);
    expect(wrapper).toMatchSnapshot();
});