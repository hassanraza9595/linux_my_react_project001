import React, { useContext, useState } from 'react';
import { TransactionContext } from './tContext';


function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);


    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc('');
        setAmount(0)
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="main-container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> ${getIncome() + getExpense()}</h3>

            <div className="balance">
                <h3>INCOME <br /> <span className="green">${getIncome()}</span></h3>
                <h3>EXPENSE <br /> <span className="red"> ${getExpense()}</span></h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="Transcation-history">
                {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    )
                })}

            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="form-control input" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text"
                        value={newDesc}
                        placeholder="Description"
                        onChange={(ev) => setDesc(ev.target.value)}
                        required />
                </label>

                <br />
                <label>
                    Enter Amount <br />
                    <input type="number"
                        value={newAmount}
                        placeholder="Amount"
                        onChange={(ev) => setAmount(ev.target.value)}
                        required />
                </label>
                <br />
                <h4>(Postive ----> INCOME)<br />
                (Negative ----> EXPENSE)</h4>
                <input className="btn" type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default Child;
