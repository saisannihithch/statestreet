import {transactions} from '../server/data.js'

const fetchTransactionsList = ()=>{
    return Promise.resolve(transactions.transactions);
}

const getTransactionDetails = (accountNumber)=>transactions.transactions.find(transaction => transaction.account === accountNumber );

const getUniqueKeys = (list=[], key='')=>{
    const uniqueKeys = new Set();

    list.forEach(item => {
        uniqueKeys.add(item[key]);
    });

    return Array.from(uniqueKeys);
}

const getFilteredList = (list, filters)=>{
    const filterKeys= Object.keys(filters).filter(filterKey => Object.keys(filters[filterKey]).length);
    
    return list.filter(item =>
        filterKeys.every(filterKey=>
            filters[filterKey][item[filterKey]] 
        )
    );
}

export {
    fetchTransactionsList,
    getUniqueKeys,
    getFilteredList,
    getTransactionDetails
}