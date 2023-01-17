import React from 'react';
import '../../scss/filters/filters.scss';
import '../../scss/filters/checkbox-filter.scss';

import Checkbox from "./Checkbox.js";

export default function Filters() {
    return (
        <section className='filters'>

            <section>
                <h1>Gamemodes <i className="fa-solid fa-arrow-rotate-left"></i></h1>
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
                <h1>Platform <i className="fa-solid fa-arrow-rotate-left"></i></h1>
                <div className='checkbox-filter'>
                    <Checkbox label="Java"/>
                    <Checkbox label="Bedrock"/>
                </div>
            </section>

        </section>
    );
}