import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce }from 'react-table';
// import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';
import search_icon from '../../../assets/icons/search-icon-img.png'
// import MOCK_DATA from './MOCK_DATA.json';
// import {COLUMNS} from './columns';
import './TransactionsListTable.css';
import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';
import EditProjectDependency from '../../modals/EditProjectDependency/EditProjectDependency';

const TransactionsListTable = ({columnsConfig, dataConfig, setIsOpen, setTxnId}) => {
    
    const columns = useMemo(() => columnsConfig, [columnsConfig]);

    const data = useMemo(() => dataConfig, [dataConfig]);



    const handleClick = (id) => {
        setTxnId(id);
        setIsOpen(true);
    }

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



    return (
        <>
        <div className="user-txns-table-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input value={value || ""} 
                        onChange={e => {
                            setValue(e.target.value)
                            onDebounceChange(e.target.value)
                        }}
                    placeholder="Search" />
                </div>

                <select className="user-txns-table-select">
                    <option>All Status</option>
                    <option>status one</option>
                    <option>status two</option>
                </select>
            </div>
        
        <table {...getTableProps()} className="user-txns-table">
        <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr className="user-txns-heading-wrapper" {...headerGroup.getHeaderGroupProps()}>
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
        <tbody className="user-txns-table-body" {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)

                    // let rowId = row.original.id;
                    return (

                        <tr {...row.getRowProps()} onClick={() => handleClick(row.original.id)}>
                        {/* <Link to={row.original.link} className="user-txns-table-link"> */}

                            {

                                row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}><span className={row.original.status === "verified" ? "verified" : ""}>{cell.render('Cell')}</span></td>
                                })
                            }
                            <td onClick={(event)=> event.stopPropagation()} className="more-menu-button">

                                <MoreOptionsMenu />
                                </td>


                        </tr>

                    )
                })
            }
        </tbody>

    </table>
    </>
    )
}

export default TransactionsListTable
