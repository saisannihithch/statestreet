import React from 'react';
import './style.css';

const Filters = (props) => {
    return ( 
        <div>
            <h3>Filters</h3>
            {props.children}
        </div>
    );
}
 
export default Filters;