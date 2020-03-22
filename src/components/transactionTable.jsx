import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './style.css';

class TransactionTable extends Component {
    state = {
        shownTransactionsList: []
    };
    transactionsList = [];
    tableRef = React.createRef();
    currentTransaction = 100;

    setShownList = (items)=>{
        this.setState({ shownTransactionsList : this.transactionsList.slice(0,items) });
    }

    handleScroll = () => {
        if (window.scrollY > this.tableRef.current.offsetTop + 0.8 * this.tableRef.current.offsetHeight) {
            this.currentTransaction += 10;
            this.setShownList(this.currentTransaction);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillReceiveProps(props){
        let {transactionsList} = props;

        if(transactionsList !==  this.transactionsList){
            this.transactionsList = transactionsList
            this.currentTransaction = 100;
            this.setShownList(this.currentTransaction);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        let {shownTransactionsList} = this.state;
        return (
            <div className="transactionTable-cntr">
                <table>
                    <thead>
                        <tr>
                            <th>ACCOUNT NO.</th>
                            <th>ACCOUNT NAME</th>
                            <th>CURRENCY</th>
                            <th>AMOUNT</th>
                            <th>TRANSACTION TYPE</th>
                        </tr>
                    </thead>
                    <tbody ref={this.tableRef}>
                        {
                            shownTransactionsList.map(transaction => (
                                <tr key={transaction.account}>
                                    <td><Link to={"/"+transaction.account}>{transaction.account}</Link></td>
                                    <td>{transaction.accountName}</td>
                                    <td>{transaction.currencyCode}</td>
                                    <td>{transaction.amount}</td>
                                    <td style = {{'text-transform':'capitalize'}}>{transaction.transactionType}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        );
    }
}


export default TransactionTable;