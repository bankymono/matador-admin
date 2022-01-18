import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce }from 'react-table';
import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';
import search_icon from '../../../assets/icons/search-icon-img.png'
// import MOCK_DATA from './MOCK_DATA.json';
// import {COLUMNS} from './columns';
import './EquityInvestmentTable.css';
import { Link, useHistory } from 'react-router-dom';

const EquityInvestmentTable = ({columnsConfig, dataConfig, handleCellClick, eqInvStatus,setEqInvStatus}) => {
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

    const handleSelectChange = (e) => {
        e.preventDefault();
        setEqInvStatus(e.target.value);
    }

    return (
        <>
        <div className="equity-inv-table-search-header">
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


                <select className="equity-inv-table-select"
                    value={eqInvStatus}
                    onChange={handleSelectChange}
                >
                    <option 
                        value="all"
                    >Status</option>
                    <option value={false}>Active</option>
                    <option value={true}>Completed</option>
                </select>

                </div>
            </div>
        
        <table {...getTableProps()} className="equity-inv-table">
        <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr className="equity-inv-table-heading-wrapper" {...headerGroup.getHeaderGroupProps()}>
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
        <tbody className="equity-inv-table-table-body" {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    // console.log('royce',row.original)
                    return (
                        // onClick={() => handleClick(row.original.id)}
                        <tr {...row.getRowProps()} onClick={()=>handleCellClick(row.original)}>
                        {/* <Link to={row.original.link} className="equity-inv-table-link"> */}
                            {

                                row.cells.map((cell)=>{
                                    // console.log(cell,'eee')
                                    return <td {...cell.getCellProps()}><span className={cell.column.Header === 'Verification Status'? "user-table-status":""}>{cell.render('Cell')}</span></td>
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

export default EquityInvestmentTable
