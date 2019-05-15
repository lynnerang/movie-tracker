import React from 'react';
import { HomeScreen } from './HomeScreen';
import { shallow } from 'enzyme';

describe('HomeScreen', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<HomeScreen />);
	});

	it('Should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
