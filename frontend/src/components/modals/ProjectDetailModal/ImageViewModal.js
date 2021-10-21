import React from 'react';
import ReactDom from 'react-dom';
import './ImageViewModal.css';

import project_image from '../../../assets/images/office-building.jpg'


const ImageViewModal = ({open,onClose}) => {
    
    if(!open) return null;
    return ReactDom.createPortal ( 
        <>
            <div onClick={onClose} className="project-modal-container">
                <div>
                <img onClick={(event)=> event.stopPropagation()} className="project-detail-modal-img" src={project_image} alt="building"/>
                </div>
            </div>
        </>,
        document.getElementById('modal-portal')
    )
}

export default ImageViewModal
