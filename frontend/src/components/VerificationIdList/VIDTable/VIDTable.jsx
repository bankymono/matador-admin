import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce }from 'react-table';
// import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';
import search_icon from '../../../assets/icons/search-icon-img.png'
// import MOCK_DATA from './MOCK_DATA.json';
// import {COLUMNS} from './columns';
import './VIDTable.css';
import { Link, useHistory } from 'react-router-dom';

const VIDTable = ({columnsConfig,columnsConfig2, dataConfig,dataConfig2, setIsOpen, setVerId, verId}) => {
    const history = useHistory()
    const columns2 = useMemo(() => columnsConfig, [columnsConfig]);
    const columns = useMemo(() => columnsConfig2, [columnsConfig2]);
    const data2 = useMemo(() => dataConfig, [dataConfig]);
    const data = useMemo(() => dataConfig2, [dataConfig2]);
    const [verified, setVerified] = useState(false);
    // const [open, setIsOpen]
    const handleViewClick = (id) => {
        setVerId(id);
        console.log('id', id)
        setIsOpen(true);
        // history.push(`/investments/fixed-income/sole?sole_id=${id}`)
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
        <div className="v-id-table-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input value={value || ""} 
                        onChange={e => {
                            setValue(e.target.value)
                            onDebounceChange(e.target.value)
                        }}
                    placeholder="Search" />
                </div>

                <select className="v-id-table-select">
                    <option>All Time</option>
                    <option>time 1</option>
                    <option>time 2</option>
                </select>
            </div>
        
        <table {...getTableProps()} className="v-id-table">
        <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr className="v-id-heading-wrapper" {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column =>(
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                        {/* <th>Action</th> */}
                        <th>Action</th>
                    </tr>
                ))
            }

        </thead>
        <tbody className="v-id-table-body" {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    // console.log('royce',row.original)
                    // let rowId = row.original.id;
                    return (

                        <tr {...row.getRowProps()}>
                        {/* <Link to={row.original.link} className="v-id-table-link"> */}

                            {

                                row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}><span className={row.original.status === "verified" ? "verified" : ""}>{cell.render('Cell')}</span></td>
                                })
                            }
                            {/* <td className="more-menu-button"><MoreOptionsMenu /></td> */}
                            <td className="control-buttons-container">
                                <button onClick={ () => handleViewClick(row.original.id)} className="view-btn">View</button>
                                <button className="verify-btn">Verify</button>
                                {/* <button className="unverify-btn">Mark Unverified</button> */}
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

export default VIDTable
