import React from 'react';
import {useParams} from "react-router-dom";
import {getTransactionDetails} from '../services/transaction'
import './transactionDetails.css';

  

const TransactionDetails = (props) => {
    let {accountNumber} = useParams();

    let transaction = getTransactionDetails(accountNumber);
    return ( 
        <div className="transaction-detail">
            <h1>Transaction {transaction.account}</h1>
            <hr/>
            <div className="details">
                <div className="detail">
                    <label>Account No. : </label>
                    <span>{transaction.account}</span>
                </div>
                <div className="detail">
                    <label>Account Name : </label>
                    <span>{transaction.accountName}</span>
                </div>
                <div className="detail">
                    <label>Currency Code : </label>
                    <span>{transaction.currencyCode}</span>
                </div>
                <div className="detail">
                    <label>Amount : </label>
                    <span>{transaction.amount}</span>
                </div>
                <div className="detail">
                    <label>Transaction Type : </label>
                    <span>{transaction.transactionType}</span>
                </div>
            </div>
        </div>
     );
}

export default TransactionDetails;