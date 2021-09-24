import React, { useEffect, useState, useRef } from 'react';
import './ProjectDetails.css';
import edit_icon from '../../assets/icons/edit-icon.png';
import office_building from '../../assets/images/office-building.jpg';
import ImageViewModal from '../../components/modals/ProjectDetailModal/ImageViewModal';
import ProjectDetailsInfoCard from '../../components/ProjectDetail/ProjectDetailsInfoCard/ProjectDetailsInfoCard';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import SubNav from '../../components/SubNav/SubNav';

const EditBtn = () => {
    return (
        <button className="project-edit-btn">
            <img className="project-edit-btn-icon" src={edit_icon} alt="edit" /> 
            <div>Edit</div>
        </button>
    )
}

const ProjectDetails = ({match, arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Investors")
    const [isOpen, setIsOpen] = useState(false);
    const sliderRef = useRef(null);
    const innerSliderRef = useRef(null);


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
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <div className="project-detail-container">    
                    
                    <SubNav currentPage={currentPage} arrLinks={arrLinks} rightButtons={<EditBtn />}/>

                    <div className="project-center-content-wrapper">
                        <div className="project-center-content">
                            <div className="project-title-container">
                                <div className="project-name">Astrid 2.0</div>
                                <div className="project-status">Active</div>
                            </div>

                            <div className="project-detail-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur consequat vestibulum lacus id porta. Morbi efficitur rhoncus bibendum. 
                                Vivamus ipsum nisi
                            </div>

                            <div ref={sliderRef} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} className="slider">
                                <div ref={innerSliderRef} className="project-images-container">
                                    <div onDoubleClick={(e)=>{e.preventDefault();setIsOpen(true)}} className="project-image-wrapper"><img className="project-image" src={office_building} alt="building" /></div>
                                    <div onDoubleClick={(e)=>{e.preventDefault();setIsOpen(true)}} className="project-image-wrapper"><img className="project-image" src={office_building} alt="building" /></div>
                                    <div onDoubleClick={(e)=>{e.preventDefault();setIsOpen(true)}} className="project-image-wrapper"><img className="project-image" src={office_building} alt="building" /></div>
                                    <div onDoubleClick={(e)=>{e.preventDefault();setIsOpen(true)}} className="project-image-wrapper"><img className="project-image" src={office_building} alt="building" /></div>
                                    <div onDoubleClick={(e)=>{e.preventDefault();setIsOpen(true)}} className="project-image-wrapper"><img className="project-image" src={office_building} alt="building" /></div>
                                    <div onDoubleClick={(e)=>{e.preventDefault();setIsOpen(true)}} className="project-image-wrapper"><img className="project-image" src={office_building} alt="building" /></div>
                                    <div onDoubleClick={(e)=>{e.preventDefault();setIsOpen(true)}} className="project-image-wrapper"><img className="project-image" src={office_building} alt="building" /></div>
                                    <div onDoubleClick={(e)=>{e.preventDefault();setIsOpen(true)}} className="project-image-wrapper"><img className="project-image" src={office_building} alt="building" /></div>
                                </div>
                            </div>
                            

                            <div className="project-detail-info-wrapper">
                                <ProjectDetailsInfoCard />
                            </div>
                        </div>
                    </div>
                    <ImageViewModal open={isOpen} onClose={closeModal} />
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails
