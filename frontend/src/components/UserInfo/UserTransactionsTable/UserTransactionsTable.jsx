import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce }from 'react-table';
import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';
// import search_icon from '../../../assets'
import search_icon from '../../../assets/icons/search-icon-img.png'
// import MOCK_DATA from './MOCK_DATA.json';
// import {COLUMNS} from './columns';
import './UserTransactionsTable.css';
import { Link, useHistory } from 'react-router-dom';

const UserTransactionsTable = ({columnsConfig, dataConfig, txnStatus, setTxnStatus, setIsOpen, txnType,setTxnType, txnId, setTxnId}) => {
    const history = useHistory()
    const columns = useMemo(() => columnsConfig, [columnsConfig]);
    const data = useMemo(() => dataConfig, [dataConfig]);
    // const [open, setIsOpen]


    const {
        getTableProps, 
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data
    },useGlobalFilter) 

    const {globalFilter} = state;

    const [value, setValue] = useState(globalFilter)

    const onDebounceChange = useAsyncDebounce(value => {
        setGlobalFilter(value)
    },400)

    const handleStatusChange = (e) => {
        e.preventDefault();
        setTxnStatus(e.target.value);
    }

    const handleTxnTypeChange = (e) => {
        e.preventDefault();
        setTxnType(e.target.value);
    }

    const handleClick = (id) => {
        setTxnId(id);
        setIsOpen(true);
    }

    return (
        <>
        <div className="u-txns-table-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input value={value || ""} 
                        onChange={e => {
                            setValue(e.target.value)
                            onDebounceChange(e.target.value)
                        }}
                    placeholder="Search" />
                </div>

                <div>

                <select
                    name="u-txns-list"
                    // value={filterOpt}
                    // onChange={handleFilterChange}
                    className="u-txns-table-select">
                    <option value="all">All time</option>
                    <option value="verified">Day</option>
                    <option value="verified">Week</option>
                    <option value="verified">Month</option>
                    <option value="verified">Year</option>
                    <option value="unverified">Date range</option>
                </select>

                <select
                    name="u-txns-list"
                    value={txnType}
                    onChange={handleTxnTypeChange}
                    className="u-txns-table-select">
                    <option value="all">Transaction Type</option>
                    <option value="all">All</option>
                    <option value="credit">Deposit</option>
                    <option value="debit">Transfer</option>
                </select>

                <select
                    name="u-txns-list"
                    value={txnStatus}
                    onChange={handleStatusChange}
                    className="u-txns-table-select">
                    <option value="all">Transaction Status</option>
                    <option value="all">All</option>
                    <option value="failed">Failed</option>
                    <option value="success">Successful</option>
                    <option value="pending">Pending</option>
                </select>
                </div>
            </div>
        
        <table {...getTableProps()} className="u-txns-table">
        <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr className="u-txns-heading-wrapper" {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column =>(
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                        <th></th>
                    </tr>
                ))
            }

        </thead>
        <tbody className="u-txns-table-body" {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    // console.log('royce',row.original)
                    return (

                        <tr {...row.getRowProps()} onClick={() => handleClick(row.original.id)}>
                        {/* <Link to={row.original.link} className="u-txns-table-link"> */}
                            {

                                row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}><span className={row.original.status === "success" ? "u-txns-table-status-success":row.original.status==="failed"?"u-txns-table-status-failed":"u-txns-table-status-pending"}>{cell.render('Cell')}</span></td>
                                    })
                            }
                            <td className="more-menu-button"><MoreOptionsMenu /></td>
                            {/* </Link>                             */}
                        </tr>


                    )
                })
            }
        </tbody>
    </table>
    </>
    )
}

export default UserTransactionsTable
