import React from 'react'
import './FilterExpenses.css'

const FilterExpenses = (props) => {
    const filterValues = props.filtervalues
    return (
        <div className="filter-expenses">
            <h4 className="filter-expenses__heading">Filter by year</h4>
            <div className="filter-expenses__filter">
                <select onChange={props.onFilterChanged} name="years" id="years">
                    {filterValues.map((value)=>{
                        return <option key={value} value={value}>{value}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default FilterExpenses