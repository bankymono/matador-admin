import React, { useEffect, useState, useRef } from 'react';
import './ProjectDetails.css';
import edit_icon from '../../assets/icons/edit-icon.png';
import office_building from '../../assets/images/office-building.jpg';
import ImageViewModal from '../../components/modals/ProjectDetailModal/ImageViewModal';
import ProjectDetailsInfoCard from '../../components/ProjectDetail/ProjectDetailsInfoCard/ProjectDetailsInfoCard';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import SubNav from '../../components/SubNav/SubNav';
import { useDispatch, useSelector } from 'react-redux';
import {getSingleProject } from '../../redux/actions/projectActions';
import { useHistory } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';


const EditBtn = () => {
    return (
        <button className="project-edit-btn">
            <img className="project-edit-btn-icon" src={edit_icon} alt="edit" /> 
            <div>Edit</div>
        </button>
    )
}

const ProjectDetails = () => {
    const [currentPage, setCurrentPage] = useState("Projects")
    const [isOpen, setIsOpen] = useState(false);
    const sliderRef = useRef(null);
    const innerSliderRef = useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const singleProjectData = useSelector(state => state.singleProjectData);
    const {projectData} = singleProjectData;
    useEffect(()=>{
        let id = history.location.pathname.split('/')[2];
        console.log(id);
        dispatch(getSingleProject(id));
    }, []);

    const [pressed, setPressed] = useState(false);
    const [startx, setStartx] = useState(null);
    const [x, setX] = useState(null);

    const checkBoundary = () => {
        let outer = sliderRef.current.getBoundingClientRect();
        let inner = innerSliderRef.current.getBoundingClientRect();

        if(parseInt(innerSliderRef.current.style.left) > 0){
            innerSliderRef.current.style.left = '0px'
        }else if(inner.right < outer.right){
            innerSliderRef.current.style.left = `-${inner.width - outer.width}px`
        }
    }

    const handleMouseUp = (e) => {
        setPressed(false)
        // setMouseMove(false)
    }

    const handleMouseDown = (e) => {
        setPressed(true);
        setStartx(e.clientX - sliderRef.current.getBoundingClientRect().left - innerSliderRef.current.offsetLeft);
    }

    const handleMouseMove= (e) => {
        
        if(!pressed) return 
        // setMouseMove(true)
        e.preventDefault();

        setX(e.clientX - sliderRef.current.getBoundingClientRect().left);

        innerSliderRef.current.style.left = `${x-startx}px`
        checkBoundary()
    }

    useEffect(()=>{
        // console.log(startx)
    },[startx])

    const closeModal = () =>{
        setIsOpen(false);
    }
    const getArrayLinks= ()=>{

        return ['home', 'projects', projectData?.project?.name];
    }
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <div className="project-detail-container">    
                    
                    {
                    projectData?
                    <SubNav currentPage={currentPage} arrLinks={getArrayLinks()} rightButtons={<EditBtn />}/>
                    : null}

                    {
                    projectData?
                    <div>
                        <div className="project-center-content-wrapper">
                        <div className="project-center-content">
                            <div className="project-title-container">
                                <div className="project-name">{projectData?.project?.name}</div>
                                <div className="project-status">{projectData?.project?.publish? 'Active':'Inactive'}</div>
                            </div>

                            <div className="project-detail-description">
                                {projectData?.project?.description? projectData?.project?.description : 'N/A'}
                            </div>

                            <div ref={sliderRef} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} className="slider">
                                <div ref={innerSliderRef} className="project-images-container">
                                    {
                                        projectData?.project?.photos.length > 0?
                                        projectData?.project?.photos.map((photo =>{
                                            return (
                                                <div key={photo.id} onDoubleClick={(e)=>{e.preventDefault();setIsOpen(true)}} className="project-image-wrapper"><img className="project-image" src={office_building} alt="building" /></div>
                                            )
                                        }))
                                        : null
                                    }                               
                                </div>
                            </div>
                            

                            <div className="project-detail-info-wrapper">
                                <ProjectDetailsInfoCard projectData={projectData?.project} />
                            </div>
                        </div>
                    </div>
                    <ImageViewModal open={isOpen} onClose={closeModal} />
                    </div>:
                    <BeatLoader loading={true} color="#03A678" />}
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails
