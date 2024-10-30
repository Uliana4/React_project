function ExpenseDate(props){
    const day = props.date.toLocaleString('pl-PL', {timeZone: 'Europe/Warsaw', day: '2-digit'});
    const month = props.date.toLocaleString('pl-PL', {month:'long'});
    const year = props.date.getFullYear();
    return(
        <div className="expense-date">
                <div className="expense_date_day">{day}</div>
                <div className="expense-date_month">{month}</div>
                <div className="expense-date_year">{year}</div>
        </div>
    );
}
export default ExpenseDate;