import {
    CHANGE_SEARCH_FIELD,
    DELETE_ROBOT,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    } from '../actions/actionTypes';


const initialStateSearch = {
    searchField: ''
}

//Set searchfield reducer ------------------------------------------------
export const setSearchField = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload}
        default:
            return state;
    }
}

    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }

    const removeRobot = (state, action) => {
        const oldRobots = state.robots;
        const updatedRobots = oldRobots.filter(robot => robot.id !== action.payload);
        //console.log(updatedRobots);
        return {...state, robots: updatedRobots};
    }


//Request Robots reducer ------------------------------------------------
export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {   
        case DELETE_ROBOT: return removeRobot(state, action);
        case REQUEST_ROBOTS_PENDING: return {...state, isPending: false}
        case REQUEST_ROBOTS_SUCCESS: return {...state, robots: action.payload, isPending: false}
        case REQUEST_ROBOTS_FAILED:  return {...state, error: action.payload, isPending: false}
        default: return state;
    }
}