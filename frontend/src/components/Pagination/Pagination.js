import React from 'react'
import './Pagination.css'

const Pagination = () => {
    return (
        <div className="pagination-container">
            <div className="pagination-item">Previous</div>
            <div className="pagination-item pagi-active">1</div>
            <div className="pagination-item">2</div>
            <div className="pagination-item">3</div>
            <div className="pagination-item">Next</div>
        </div>
    )
}

export default Pagination