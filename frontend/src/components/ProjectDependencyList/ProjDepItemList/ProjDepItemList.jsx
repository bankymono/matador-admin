import React, {useEffect, useState} from 'react';
import './ProjDepItemList.css';


import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, COLUMNS2} from './columns';

import Pagination from '../../Pagination/Pagination';
import ProjDepItemTable from '../ProjDepItemTable/ProjDepItemTable';
import { useDispatch, useSelector } from 'react-redux';

import EquityInvestmentDetail from '../../modals/EquityInvestmentDetail/EquityInvestmentDetail';
import { getAmenities, getBuildingTypes, getCategories, getLandTitles, getProjStatus } from '../../../redux/actions/projDepActions';
import ProjDepDetailModal from '../../modals/ProjDepDetailModal/ProjDepDetailModal';

const ProjDepItemList = ({match}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [veriIdsList, setveriIdsList] = useState([])
    const [projDepObj, setProjDepObj] = useState([])
    const [depId, setDepId] = useState('');
    const [pagiOffset, setPagiOffset] = useState(0);


    const dispatch = useDispatch();

    const depProjStatusList = useSelector(state => state.depProjStatusList);
    const {projDepStatuses, projDepStatusLoading, projDepStatusError } = depProjStatusList;

    const depLandTitleList = useSelector(state => state.depLandTitleList);
    const {projDepLandTitles, projDepLandTitleLoading, projDepLandTitleError } = depLandTitleList;

    const depAmenityList = useSelector(state => state.depAmenityList);
    const {projDepAmenities, projDepAmenitiesLoading, projDepAmenitiesError } = depAmenityList;

    const depBuildingTypeList = useSelector(state => state.depBuildingTypeList);
    const {projDepBuildingTypes, projDepBuildingTypesLoading, projDepBuildingTypesError } = depBuildingTypeList;

    const depCategoryList = useSelector(state => state.depCategoryList);
    const {projDepCategorys, projDepCategorysLoading, projDepCategorysError } = depCategoryList;


    useEffect(()=>{
        if(match.params.dep === 'project-status'){
            dispatch(getProjStatus());            
        } else if(match.params.dep === 'land-title'){
            dispatch(getLandTitles());         
        }else if(match.params.dep === 'amenity'){
            dispatch(getAmenities());         
        }else if(match.params.dep === 'building-type'){
            dispatch(getBuildingTypes());         
        }else if(match.params.dep === 'categorys'){
            dispatch(getCategories());         
        }

    }, [dispatch, match])

    useEffect(()=>{
        if(match.params.dep === 'project-status'){
            if(projDepStatusLoading === false && !projDepStatusError){
                constructObject(projDepStatuses)
            }
        }else if(match.params.dep === 'land-title'){
            if(projDepLandTitleLoading === false && !projDepLandTitleError){
                constructObject(projDepLandTitles)
            }
        }else if(match.params.dep === 'amenity'){
            if(projDepAmenitiesLoading === false && !projDepAmenitiesError){
                constructObject(projDepAmenities)
            }
        }else if(match.params.dep === 'building-type'){
            if(projDepBuildingTypesLoading === false && !projDepBuildingTypesError){
                constructObject(projDepBuildingTypes)
            }
        }else if(match.params.dep === 'categorys'){
            if(projDepCategorysLoading === false && !projDepCategorysError){
                constructObject(projDepCategorys)
            }
        }
    }, [projDepStatuses, projDepStatusLoading, projDepStatusError,
        projDepLandTitleLoading, projDepLandTitles, projDepLandTitleError,
        projDepBuildingTypes,projDepBuildingTypesLoading,projDepBuildingTypesError,
        projDepAmenities, projDepAmenitiesError, projDepAmenitiesLoading,
        projDepCategorys, projDepCategorysLoading, projDepCategorysError,
        match,
        ])


    const constructObject = (receivedObj) => {

        console.log('reeeeceeeved',receivedObj);

        let newArr = receivedObj.data.map(obj => {
            let dt = new Date(obj.created_at)
            return({
                id:obj.id,
                name: obj.name,
                description: obj.description,
                created_by: obj.created_by === null ? "None" : obj.created_by.first_name + " " + obj.created_by.last_name,
                updated_by: obj.last_updated_by === null ? "None" : obj.last_updated_by.first_name + " " + obj.last_updated_by.last_name,
                created_at: dt.toLocaleString()
            })
        })

        setProjDepObj(newArr)
    }

    const closeModal = () =>{        
        // history.push(`/investments/fixed-income/sole`)
        setDepId("");
        setIsOpen(false);
    }

    return (
        <>
            <div>

                 <ProjDepItemTable 
                    columnsConfig={COLUMNS} 
                    columnsConfig2={COLUMNS2} 
                    dataConfig={projDepObj} 
                    dataConfig2={projDepObj} 
                    setIsOpen={setIsOpen}
                    setDepId={setDepId}
                    depId={depId}
                    depType={match.params.dep}
                    // setIsOpen={setIsOpen}
                />

            <div className="s-i-ongoing-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            {/* <VIDDetails verId={verId} setIsOpen={setIsOpen} open={isOpen} onClose={closeModal} /> */}
            <ProjDepDetailModal depType={match.params.dep} depId={depId} setIsOpen={setIsOpen} open={isOpen} onClose={closeModal} />
            {/* <EquityInvestmentDetail  setIsOpen={setIsOpen} open={isOpen} onClose={closeModal} /> */}
        </div>

        </>
        
    )
}

export default ProjDepItemList
