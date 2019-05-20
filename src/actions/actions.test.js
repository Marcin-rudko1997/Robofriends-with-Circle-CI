import {
    CHANGE_SEARCH_FIELD,
    DELETE_ROBOT,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    } from './actionTypes';
import * as actions from './actions';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

describe('Actions Tests', () => {
    it('should create an action to set SearchField', () => {
        expect(actions.setSearchField('woo')).toEqual({
            type: CHANGE_SEARCH_FIELD,
            payload: 'woo'
        })
    })

    it('should handle requestRobots API ', () => {
        const store = mockStore();
        store.dispatch(actions.fetchRobots());
        const action = store.getActions();

        expect(action[0]).toEqual({
            type: REQUEST_ROBOTS_PENDING,
            payload: {isPending: true}
        });
    })
})