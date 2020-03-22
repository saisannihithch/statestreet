import React, { Component } from 'react';
import Filter from '../components/filter';
import { fetchTransactionsList, getUniqueKeys, getFilteredList} from '../services/transaction';
import TransactionTable from '../components/transactionTable';
import Filters from '../components/filters';
import './transactionList.css';

class TransactionList extends Component {
    selectedFilters = {
        accountName:[],
        transactionType:[]
    }
    filterTypes = {
        accountName:[],
        transactionType:[]
    }
    state = { 
        listTransaction:[],
        filteredTransactions:[],
    }

    componentDidMount(){
        fetchTransactionsList()
            .then(listTransaction=>{
                this.setFilters(listTransaction);
                this.setState({listTransaction, filteredTransactions:listTransaction});
            })
    }

    filterTransactionList = ()=>{
        const {listTransaction} = this.state;
        const filteredTransactions =  getFilteredList(listTransaction,this.selectedFilters)

        this.setState({ filteredTransactions }, ()=>{console.log(this.state.filteredTransactions)});
    }

    setFilters = (listTransaction)=>{
        this.filters.forEach(filter=>{
            this.filterTypes[filter.key] = getUniqueKeys(listTransaction,filter.key);
        })
    }

    onSelectFilter = (filterName, event)=>{
        const {name:filterType, checked} = event.target
        
        if(checked){
            this.selectedFilters[filterName][filterType] = true;
        } else {
            delete this.selectedFilters[filterName][filterType];
        }

        this.filterTransactionList()
        
    }

    onAccountFilterChange = this.onSelectFilter.bind(this,"accountName");
    onTransactionFilterChange = this.onSelectFilter.bind(this,"transactionType");

    filters = [
        {key:'accountName',name:'Account Name',onTypeSelect: this.onAccountFilterChange},
        {key:'transactionType',name:'Transaction Type', onTypeSelect: this.onTransactionFilterChange}
    ]

    render() { 
        const {filteredTransactions} = this.state;
        return ( 
        <div className="transactions-cntr">
            <h1>My Transactions</h1>
            <hr/>
            <div className="transactions-body">
               <div className="filters">
                <Filters>
                        {this.filters.map(filter =>
                            <Filter key={filter.key} name={filter.name} types={this.filterTypes[filter.key]||[]} onTypeSelectChange={filter.onTypeSelect}/>
                        )}
                </Filters>
               </div>
               <div className="transactions">
                <TransactionTable transactionsList={filteredTransactions}></TransactionTable>
               </div> 
            </div>

        </div> );
    }
}
 
export default TransactionList;