import { useState } from 'react/cjs/react.development';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense';

const EXPENSE_LIST = [{
  id: "et1",
  date: new Date(2021, 2, 24),
  title: "Book",
  price: "500"
}, {
  id: "et2",
  date: new Date(2022, 0, 24),
  title: "Toilet Paper",
  price: "200"
}, {
  id: "et3",
  date: new Date(2020, 10, 10),
  title: "News Paper",
  price: "100"
}]

function App() {

  const [expenses,setExpenses] = useState(EXPENSE_LIST);

  const onAddNewExpense = (expense) => {
    if(expense){
      expense.id = "et" + (expenses.length + 1);
      setExpenses([...expenses,expense]);
    }
  }
  return (
    <div className="App">
      <NewExpense onAddNewExpense={onAddNewExpense}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
