import React from 'react';
import { shallow } from 'enzyme';
import { AdminPage } from '../../../components/admin/AdminPage';

test('should render AdminPage component correctly', () => {
  const wrapper = shallow(<AdminPage />);
  expect(wrapper).toMatchSnapshot();
});