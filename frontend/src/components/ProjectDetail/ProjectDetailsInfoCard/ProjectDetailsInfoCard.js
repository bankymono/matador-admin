import React from 'react'
import { numberWithComma } from '../../../redux/numberFormatter'
import './ProjectDetailsInfoCard.css'

const ProjectDetailsInfoCard = ({projectData}) => {
    return (
            <div className="project-details-info">

                <div className="project-details-info-item">
                    <div className="project-details-info-item-cell">
                        <div className="detail-type">Start date</div>
                        <div className="detail-value">{new Date(projectData.created_at).toDateString()}</div>
                    </div>
                    <div className="project-details-info-item-cell">
                        <div className="detail-type">Completion date</div>
                        <div className="detail-value">{new Date(projectData.completed_timestamp).toDateString()}</div>
                    </div>
                </div>

                <div className="project-details-info-item">
                    <div className="project-details-info-item-cell">
                        <div className="detail-type">Building size</div>
                        <div className="detail-value">{projectData.building_size}</div>
                    </div>
                    <div className="project-details-info-item-cell">
                        <div className="detail-type">Total units</div>
                        <div className="detail-value">{projectData.total_units}</div>
                    </div>
                </div>

                <div className="project-details-info-item">
                    <div className="project-details-info-item-cell">
                        <div className="detail-type">Location</div>
                        <div className="detail-value">{projectData.location_description}</div>
                    </div>
                    <div className="project-details-info-item-cell">
                        <div className="detail-type">Construction company</div>
                        <div className="detail-value">{projectData.constructed_by}</div>
                    </div>
                </div>

                <div className="project-details-info-item">
                    <div className="project-details-info-item-cell">
                        <div className="detail-type">Holding period</div>
                        <div className="detail-value">{projectData.holding_period_in_months + ' month(s)'}</div>
                    </div>
                    <div className="project-details-info-item-cell">
                        <div className="detail-type">Investment Type</div>
                        <div className="detail-value">{projectData.investment_type.investment_type}</div>
                    </div>
                </div>

                <div className="project-details-info-item">
                    <div className="project-details-info-item-cell">
                        <div className="detail-type">Total fractions</div>
                        <div className="detail-value">{numberWithComma(projectData.total_fractions)}</div>
                    </div>
                    <div className="project-details-info-item-cell">
                        <div className="detail-type">Price per fraction</div>
                        <div className="detail-value">{numberWithComma(projectData.price_per_fraction)}</div>
                    </div>
                </div>    
                
                <div className="project-details-info-item">
                    <div className="project-details-info-item-cell">
                        <div className="detail-type">Cash on cash yield</div>
                        <div className="detail-value">{projectData.cash_on_cash_yield}</div>
                    </div>                    
                </div>

            </div>
    )
}

export default ProjectDetailsInfoCard
