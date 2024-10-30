import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx";

function ExpenseItem(props){
    return (
        <div className="expense-item">
            <div className = "expense-item_id">{props.is}</div>
            <ExpenseDate date = {props.date}/>
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_ptice">{props.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;