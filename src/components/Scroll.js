import React from 'react';

const scroll = (props) => {
    return(
        <div style={{overflow: 'scroll', border: '2px solid #000', height: '800px', padding: '20px'}}>
            {props.children}
        </div>
    );
}

export default scroll;