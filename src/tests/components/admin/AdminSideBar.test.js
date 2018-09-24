import React from 'react';
import { shallow } from 'enzyme';
import { AdminSideBar } from '../../../components/admin/AdminSideBar';

test('should render AdminSideBar component correctly on create page', () => {
  const wrapper = shallow(<AdminSideBar path='create' />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('Link').at(0).hasClass('admin-sidebar__button--active')).toBe(true);
});

test('should render AdminSideBar component correctly on edit page', () => {
  const wrapper = shallow(<AdminSideBar path='edit' />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('Link').at(1).hasClass('admin-sidebar__button--active')).toBe(true);
});