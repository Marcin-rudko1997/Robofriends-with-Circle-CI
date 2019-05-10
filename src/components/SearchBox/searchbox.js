import React from 'react';
import './Searchbox.css';

const searchbox = ({searchChange}) => {
    //console.log('Search box');
    return(
        <div className="pa2">
            <input
            aria-label='Search robots' 
            className="pa3 SearchBox" 
            type='search' 
            placeholder='search robots'
            onChange={searchChange}
            />
        </div>
    );

}

export default searchbox;