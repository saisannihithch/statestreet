import React from 'react';
import './style.css';

const Filter = (props) => {
    let {name,types,onTypeSelectChange} = props;
    return ( 
        <div className="filter-cntr">
            <h4>{name}</h4>
            <div>
            {
                types.map(type=>(
                    <div key={type}>
                        <input type="checkbox" name={type} onClick={onTypeSelectChange} id={'check'+type}/>
                        <label style = {{'text-transform':'capitalize'}} htmlFor={'check'+type}>{type}</label>
                    </div>
                ))
            }
            </div>
        </div>
    );
}
 
export default Filter;