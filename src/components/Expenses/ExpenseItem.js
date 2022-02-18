import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../Ui/Card'

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__title">{props.title}</div>
            <div className="expense-item__price">₹{props.price}</div>
        </Card>
    )
}

export default ExpenseItem
