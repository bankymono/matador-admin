import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listEquityInvestment } from '../../../redux/actions/projectActions'
import EquityBasedOngoingAndSoldTab from './EquityBasedOngoingAndSoldTab/EquityBasedOngoingAndSoldTab'
import EquityBasedProjectListOverviewCard from './EquityProjectsListOverviewCard/EquityBasedProjectsListOverviewCard'

const EquityBasedProjects = () => {
    const dispatch = useDispatch()
    const equityInvestmentList = useSelector(state => state.equityInvestmentList);
    

    const {eqLoading, eqError, equityInvestments} = equityInvestmentList;

    // let newDateArr = equityInvestments.map(eq => {

    //  return  ( {
    //         investor_name:"",
    //         equity_type:"",
    //         number_of_fractions:"",
    //         investment_date:"",
    //         amount_invested:""
    //     })
    // })

    useEffect(() => {
        dispatch(listEquityInvestment())


    },[dispatch])

    return (
        <>{
            console.log('eerr', eqLoading, eqError, equityInvestments)
        }
            <EquityBasedProjectListOverviewCard />
            <EquityBasedOngoingAndSoldTab 
                eqLoading={eqLoading}
                eqError={eqError}
                equityInvestments={equityInvestments}
            />
        </>
    )
}

export default EquityBasedProjects
