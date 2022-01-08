import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce }from 'react-table';
import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';
// import search_icon from '../../../assets'
import search_icon from '../../../assets/icons/search-icon-img.png'
// import MOCK_DATA from './MOCK_DATA.json';
// import {COLUMNS} from './columns';
import './UserInvestmentsTable.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listInvestmentsType } from '../../../redux/actions/investmentsActions';

const UserInvestmentsTable = ({columnsConfig, dataConfig, setInvId, invStatus, setInvStatus, invType,setInvType, setIsOpen}) => {
    const history = useHistory()
    const columns = useMemo(() => columnsConfig, [columnsConfig]);
    const data = useMemo(() => dataConfig, [dataConfig]);
    // const [open, setIsOpen]

    const dispatch = useDispatch();

    const investmentsTypeList = useSelector(state => state.investmentsTypeList)

    // const [investmentType, setInvestmentType] = useState(1);

    useEffect(() => {
        dispatch(listInvestmentsType());
    },[dispatch])



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
        setInvStatus(e.target.value);
    }

    const handleInvSelectChange = (e) => {
        setInvType(e.target.value)
    }

    const handleClick = (id) => {
        setInvId(id);
        setIsOpen(true);
    }

    // const handleInvTypeChange = (e) => {
    //     e.preventDefault();
    //     setInvType(e.target.value);
    // }

    return (
        <>
        <div className="u-is-table-search-header">

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
                    name="u-is-list"
                    // value={filterOpt}
                    // onChange={handleFilterChange}
                    className="u-is-table-select">
                    <option value="all">All time</option>
                    <option value="verified">Day</option>
                    <option value="verified">Week</option>
                    <option value="verified">Month</option>
                    <option value="verified">Year</option>
                    <option value="unverified">Date range</option>
                </select>

                <select
                    name="u-is-list"
                    value={invStatus}
                    onChange={handleStatusChange}
                    className="u-is-table-select">
                    <option value="all">Investment Status</option>
                    <option value="all">All</option>
                    <option value={true}>Active</option>
                    <option value={false}>Closing</option>

                </select>

                <select name="investments-type" value={invType} onChange={handleInvSelectChange} className="u-is-table-select" >
                    <option value={0}>All Investment</option>
                    {investmentsTypeList?.loading === false ? investmentsTypeList?.investmentsTypes?.data.map(el => (
                    <option key={el.id} value={el.id}>
                        {el.name}
                    </option>)): null}
                </select>

                {/* <select
                    name="u-is-list"
                    // value={invType}
                    // onChange={handleInvTypeChange}
                    className="u-is-table-select">
                    <option value="all">Investment Type</option>
                    <option value="all">All</option>
                    <option value="credit">Deposit</option>
                    <option value="debit">Transfer</option>
                </select> */}


                </div>
            </div>
        
        <table {...getTableProps()} className="u-is-table">
        <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr className="u-is-heading-wrapper" {...headerGroup.getHeaderGroupProps()}>
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
        <tbody className="u-is-table-body" {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    // console.log('royce',row.original)
                    return (

                        <tr {...row.getRowProps()} onClick={() => handleClick(row.original.id)}>
                        {/* <Link to={row.original.link} className="u-is-table-link"> */}
                            {

                                row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}><span className={row.original.status === "Active" ? "u-is-table-status-active":"u-is-table-status-closed"}>{cell.render('Cell')}</span></td>
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

export default UserInvestmentsTable
