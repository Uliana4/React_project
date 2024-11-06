import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "./Card";

function ExpenseItem(props){
    return (
        <Card className="expense-item">
            <div className = "expense-item_id">{props.id}</div>
            <ExpenseDate date = {props.date}/>
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_price">{props.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem;