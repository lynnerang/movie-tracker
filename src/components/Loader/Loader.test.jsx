import React from 'react';
import Loader from './Loader';
import { shallow } from 'enzyme';

describe('Loader', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Loader />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
