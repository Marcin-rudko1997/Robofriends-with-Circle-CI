import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox/searchbox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import {connect} from 'react-redux';
import {setSearchField, fetchRobots, deleteRobot} from '../actions/actions';
import Header from '../components/Header';

class App extends Component {
    
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const {onSearchChange, searchField, robots, isPending, onDeletingRobot} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        let appBody = <h1>Loading</h1>;
        if(!isPending) {
            appBody = <div className="tc">
                        <Header/>
                        <SearchBox searchChange={onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots} onDeletedRobot={onDeletingRobot}/>
                            </ErrorBoundary>
                        </Scroll>
                     </div>;
        }
        return appBody;
        
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