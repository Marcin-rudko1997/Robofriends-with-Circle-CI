import React from 'react';
import Card from './Card/Card';

const cardList = ({robots, onDeletedRobot}) => {
    //console.log('Card list');
    const cardsArray = robots.map((user, index ) =>  {
        return <Card key={index} id={user.id} name={user.name} email={user.email} deleteRobot={() => onDeletedRobot(user.id)}/>
    })
    return(
        <div>
            {cardsArray}
        </div>
        
    );
}

export default cardList;