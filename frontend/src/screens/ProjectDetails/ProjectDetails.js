import React, { useState } from 'react';
import './ProjectDetails.css';
import edit_icon from '../../assets/icons/edit-icon.png';
import office_building from '../../assets/images/office-building.jpg';
import ImageViewModal from '../../components/modals/ProjectDetailModal/ImageViewModal';
import ProjectDetailsInfoCard from '../../components/ProjectDetail/ProjectDetailsInfoCard/ProjectDetailsInfoCard';

const ProjectDetails = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () =>{
        setIsOpen(false);
    }
    return (
        <div className="project-detail-container">
            
            <div className="project-top-nav">
                <div>left content</div>
                <button className="project-edit-btn">
                    <img className="project-edit-btn-icon" src={edit_icon} alt="edit" /> 
                    <div>Edit</div>
                </button>
            </div>

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

                    <div className="project-images-container">
                        <div onClick={()=>setIsOpen(true)} className="project-image-wrapper"><img className="project-image" src={office_building} alt="building" /></div>
                        <div onClick={()=>setIsOpen(true)} className="project-image-wrapper"><img className="project-image" src={office_building} alt="building" /></div>
                    </div>

                    <div className="project-detail-info-wrapper">
                        <ProjectDetailsInfoCard />
                    </div>
                </div>
            </div>
            <ImageViewModal open={isOpen} onClose={closeModal} />
        </div>
    )
}

export default ProjectDetails
