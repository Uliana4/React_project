//import "./ExpenseItem.css";

function ExpenseDate(props){
    const month = props.date.toLocaleString('pl-Pl', {timeZone: 'Europe/Warsaw', month: 'long'});
    //let month = props.date.getUTCMonth()+1;
    //let day = props.date.getUTCDate();
    const day = props.date.toLocaleString('pl-Pl', {day:'2-digit'});
    const year = props.date.getUTCFullYear();
    //let newDate = year +"/"+month+"/"+day;
    return(
        <div className = "expense-date">
            <div className= "expense-date_day">{day}</div>
            <div className= "expense-date_month">{month}</div>
            <div className= "expense-date_year">{year}</div>
        </div>
    );
}
export default ExpenseDate;