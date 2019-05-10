import {
    CHANGE_SEARCH_FIELD,
    DELETE_ROBOT,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED} from './actionTypes';

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const deleteRobot = (robotID) => {
    return {
        type: DELETE_ROBOT,
        payload: robotID
    }
}

export const fetchRobots = () => dispatch => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}));
}