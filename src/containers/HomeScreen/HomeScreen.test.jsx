import React from 'react';
import HomeScreen from './HomeScreen';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';

const mockStore = configureMockStore();
const store = mockStore({});

describe('HomeScreen', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<Provider store={store}>
				<HomeScreen />
			</Provider>
		);
	});

	it('Should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

});
