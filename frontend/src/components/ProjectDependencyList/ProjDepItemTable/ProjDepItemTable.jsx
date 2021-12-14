import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce }from 'react-table';
// import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';
import search_icon from '../../../assets/icons/search-icon-img.png'
// import MOCK_DATA from './MOCK_DATA.json';
// import {COLUMNS} from './columns';
import './ProjDepItemTable.css';
import { Link, useHistory } from 'react-router-dom';
import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';

const ProjDepItemTable = ({columnsConfig,columnsConfig2, dataConfig,dataConfig2, setIsOpen, setVerId, verId}) => {
    const history = useHistory()
    const columns = useMemo(() => columnsConfig, [columnsConfig]);
    const columns2 = useMemo(() => columnsConfig2, [columnsConfig2]);
    const data = useMemo(() => dataConfig, [dataConfig]);
    const data2 = useMemo(() => dataConfig2, [dataConfig2]);
    const [verified, setVerified] = useState(false);

    const handleViewClick = (id) => {
        setVerId(id);
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
        <div className="p-d-i-table-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input value={value || ""} 
                        onChange={e => {
                            setValue(e.target.value)
                            onDebounceChange(e.target.value)
                        }}
                    placeholder="Search" />
                </div>

                <select className="p-d-i-table-select">
                    <option>All Status</option>
                    <option>status one</option>
                    <option>status two</option>
                </select>
            </div>
        
        <table {...getTableProps()} className="p-d-i-table">
        <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr className="p-d-i-heading-wrapper" {...headerGroup.getHeaderGroupProps()}>
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
        <tbody className="p-d-i-table-body" {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)

                    // let rowId = row.original.id;
                    return (

                        <tr {...row.getRowProps()}>
                        {/* <Link to={row.original.link} className="p-d-i-table-link"> */}

                            {

                                row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}><span className={row.original.status === "verified" ? "verified" : ""}>{cell.render('Cell')}</span></td>
                                })
                            }
                            <td className="more-menu-button"><MoreOptionsMenu /></td>
                            {/* <td className="control-buttons-container"> */}
                                {/* <button onClick={ () => handleViewClick(row.original.id)} className="view-btn">View</button> */}
                                {/* <button className="verify-btn">Verify</button> */}
                                {/* <button className="unverify-btn">Mark Unverified</button> */}
                            {/* </td> */}

                        </tr>

                    )
                })
            }
        </tbody>
    </table>
    </>
    )
}

export default ProjDepItemTable
