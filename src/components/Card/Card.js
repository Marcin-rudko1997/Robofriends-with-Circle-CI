import React from 'react';
import './Card.css';


const card = ({id, name, email, deleteRobot}) => {
    return(
        <div className="tc br3 shadow-3 dib pa3 ma2 bw2 card">
            <i className="card__delete" onClick={deleteRobot}>&times;</i>
            <img src={`https://robohash.org/${id}?set=set2&size=100x100`} alt='robots'/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );

}

export default card;