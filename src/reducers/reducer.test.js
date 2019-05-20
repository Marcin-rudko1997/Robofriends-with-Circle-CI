import {
    CHANGE_SEARCH_FIELD,
    DELETE_ROBOT,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    } from '../actions/actionTypes';

import * as reducers from './reducer';


describe('set SearchField', () => {
    const initialStateSearch = {
        searchField: ''
    }

    it('set the initial state', () => {
        expect(reducers.setSearchField(undefined, {})).toEqual({searchField: ''});
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.setSearchField(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({searchField: 'abc'})
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }

    it('set the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    })

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            isPending: true,
            robots: [],
            error: ''
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: 1,
                name: 'John',
                email: 'John@gmail.com'
            }]
        })).toEqual({
            isPending: false,
            error: '',
            robots: [{
                    id: 1,
                    name: 'John',
                    email: 'John@gmail.com'
                }
            ]
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'error'
        })).toEqual({
            isPending: false,
            robots: [],
            error: 'error'
        })
    })

})