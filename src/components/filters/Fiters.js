import React from 'react';
import '../../scss/filters/filters.scss';
import '../../scss/filters/checkbox-filter.scss';

import Checkbox from "./Checkbox.js";

export default function Filters() {
    return (
        <section className='filters'>

            <section>
                <span className='label'><h1>Gamemodes</h1><i className="fa-solid fa-arrow-rotate-left"></i></span>
                <div className='checkbox-filter'>
                    <Checkbox label="Theme Parks"/>
                    <Checkbox label="Creative"/>
                    <Checkbox label="Skyblock"/>
                    <Checkbox label="Survival"/>
                    <Checkbox label="Manhunt"/>
                    <Checkbox label="Bedwars"/>
                </div>
            </section>

            <section>
                <span className='label'><h1>Platform</h1><i className="fa-solid fa-arrow-rotate-left"></i></span>
                <div className='checkbox-filter'>
                    <Checkbox label="Java"/>
                    <Checkbox label="Bedrock"/>
                </div>
            </section>

        </section>
    );
}