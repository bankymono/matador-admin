import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce }from 'react-table';
import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';
// import search_icon from '../../../assets'
import search_icon from '../../../assets/icons/search-icon-img.png'
// import MOCK_DATA from './MOCK_DATA.json';
// import {COLUMNS} from './columns';
import './UsersTable.css';
import { Link, useHistory } from 'react-router-dom';

const UsersTable = ({columnsConfig, dataConfig, handleClick, filterOpt, setFilterOpt}) => {
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

    const handleFilterChange = (e) => {
        e.preventDefault();
        setFilterOpt(e.target.value);
        console.log('ddd', filterOpt)
    }

    return (
        <>
        <div className="users-table-search-header">
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
                    name="users-list"
                    value={filterOpt}
                    onChange={handleFilterChange}
                    className="users-table-select">
                    <option value="all">Filter</option>
                    <option value="verified">Verified</option>
                    <option value="unverified">Not verified</option>
                </select>
                </div>
            </div>
        
        <table {...getTableProps()} className="users-table">
        <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr className="u-t-heading-wrapper" {...headerGroup.getHeaderGroupProps()}>
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
        <tbody className="u-t-table-body" {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    console.log('royce',row.original)
                    return (

                        <tr {...row.getRowProps()} onClick={() => handleClick(row.original.id)}>
                        {/* <Link to={row.original.link} className="users-table-link"> */}
                            {

                                row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}><span className={row.original.verification_status === "Verified" ? "user-table-status-verified":"user-table-status-unverified"}>{cell.render('Cell')}</span></td>
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

export default UsersTable
