import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false,
    }

    componentDidCatch = (err) => {
        this.setState({error: true});
    }
    render() {
        if(this.state.error) 
            return <h1>Something went wrong</h1>;
        return this.props.children;
    }
}

export default ErrorBoundary;