import userReducer from './userReducer';
import * as mockData from '../util/mockData/mockData'

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {
      "email": "", "id": 0, "name": "", "password": ""
    };

    const result = userReducer(undefined, {
      "email": "", "id": 0, "name": "", "password": ""})

    expect(result).toEqual(expected)
  })
})

describe('userReducer', () => {
  it('should return state with a new array of movies', () => {
    const expected = mockData.mockUser;

    const result = userReducer(mockData.mockUser, {})

    expect(result).toEqual(expected)
  })
})