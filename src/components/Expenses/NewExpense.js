import React, { useState } from 'react'
import Card from '../Ui/Card'
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)
    const toggleForm = () => {
        setShowForm(!showForm)
    }
    const onAddNewExpense = (expense) => {
        console.log(expense);
        props.onAddNewExpense(expense);
        toggleForm()
    }
    return (
        <Card className="new-expense">
            {showForm ? <NewExpenseForm onAddNewExpense={onAddNewExpense}/> : <button onClick={toggleForm} className="new-expense-form__submit">Add New Expense</button>}
        </Card>
    )

}

export default NewExpense