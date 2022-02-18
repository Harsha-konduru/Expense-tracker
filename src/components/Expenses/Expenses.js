import React, { useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../Ui/Card';
import FilterExpenses from './FilterExpenses';
import './Expenses.css';
const FILTER_VALUES = ['All','2020','2021','2022']

const Expenses = (props) => {
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);
  const [activeFilter, setActiveFilter] = useState(FILTER_VALUES[0]);
  
  const filterChanged = (event) => {
    setActiveFilter(event.target.value);
  }

  const setFilterData = (value) => {
    if(value == 'All'){
      setFilteredExpenses(props.expenses)
    }else{
      setFilteredExpenses(props.expenses.filter(expense => expense.date.getFullYear().toString() == value))
    }
  }

  useEffect(()=>{
    setFilterData(activeFilter);
  },[props.expenses,activeFilter])

  return (
    <Card className="expenses">
      <FilterExpenses filtervalues={FILTER_VALUES} onFilterChanged={filterChanged} />
      {filteredExpenses.map(expense => <ExpenseItem key={expense.id} {...expense} />)}
    </Card>
  )
}

export default Expenses