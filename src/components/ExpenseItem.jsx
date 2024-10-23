import "./ExpenseItem.css";
function ExpenseItem(props){
    let month = props.date.getUTCMonth()+1;
    let day = props.date.getUTCDate();
    let year = props.date.getUTCFullYear();
    let newDate = year +"/"+month+"/"+day;

    return (
        <div className="expense-item">
            <div> {newDate} </div>
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_ptice">{props.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;