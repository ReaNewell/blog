import React from 'react';
import { shallow } from 'enzyme';
import { AdminLogin } from '../../../components/admin/AdminLogin';

let startLogin, wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<AdminLogin startLogin={startLogin} />)
})


test('should render AdminLogin component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should set email on input change', () => {
    const value = 'rea@rea.com'
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('email')).toBe(value);
});

test('should set password on input change', () => {
    const value = 'password';
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('password')).toBe(value);
});

test('should handle startLogin', () => {
    wrapper.setState({
        email: 'rea@rea.com',
        password: 'password'
    });
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});