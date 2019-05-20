import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {setSearchField, fetchRobots, deleteRobot} from '../actions/actions';
import MainPage from '../components/MainPage';

class App extends Component {
    
    render() {
        return <MainPage {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        searchField: state.setSearchField.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(fetchRobots()),
        onDeletingRobot: (robotID) => dispatch(deleteRobot(robotID))
       
    }
}
    

export default connect(mapStateToProps, mapDispatchToProps)(App);