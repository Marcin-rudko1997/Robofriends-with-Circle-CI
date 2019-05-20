import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox/searchbox';
import Scroll from '../components/Scroll';
import './MainPage.css';
import ErrorBoundary from '../components/ErrorBoundary';

import Header from '../components/Header';

class MainPage extends Component {
    
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = robots => {
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render() {
        const {onSearchChange, robots, isPending, onDeletingRobot} = this.props;

        let appBody = <h1>Loading</h1>;
        if(!isPending) {
            appBody = <div className="tc">
                        <Header/>
                        <SearchBox searchChange={onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={this.filterRobots(robots)} onDeletedRobot={onDeletingRobot}/>
                            </ErrorBoundary>
                        </Scroll>
                     </div>;
        }
        return appBody;
        
    }
} 


    

export default MainPage;