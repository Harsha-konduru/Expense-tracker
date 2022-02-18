import React, { useEffect, useState } from 'react'
import './NewExpenseForm.css'

const NewExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [isDisabled, setIsDiabled] = useState(true);
    const addExpense = (event) => {
        event.preventDefault();
        if (!isDisabled) {
            let expense = {
                title, price, date : new Date(date)
            }
            props.onAddNewExpense(expense);
        }
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    useEffect(()=>{
        checkIsDisabled();
    },[title,date,price])

    const checkIsDisabled = () => {
        if (title && date && price) {
            isDisabled && setIsDiabled(false)
        } else {
            !isDisabled && setIsDiabled(true)
        }
    }

    return (
        <form className="new-expense-form">
            <div className="new-expense-form__controls">
                <div className="new-expense-form__formfield">
                    <label>Title</label>
                    <input value={title} type="text" onChange={handleTitleChange}></input>
                </div>
                <div className="new-expense-form__formfield">
                    <label>Expense</label>
                    <input min="1" step="1" type="number" onChange={handlePriceChange} value={price}></input>
                </div>
                <div className="new-expense-form__formfield">
                    <label>Date</label>
                    <input min="2020-01-01" max="2022-12-31" type="date" onChange={handleDateChange} value={date}></input>
                </div>
            </div>
            <div className="new-expense-form_actions">
                <button type="submit" disabled={isDisabled} onClick={addExpense} className="new-expense-form__submit">Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm