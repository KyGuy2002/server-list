import React from 'react';
import '../../scss/filters/checkbox.scss';

export default function Checkbox(props) {
    return (
        <label className="checkbox-container">
                <input className='vanilla-checkbox' type="checkbox"/>
                <span className='visible-checkbox'></span>
                {props.label}
        </label>
    );
}