import React from 'react'
import './Pagination.css'

const Pagination = ({usersPerPage, listLength, paginate, currentPage}) => {
    const pageNum= currentPage;
    const getPageNumbersArray = ()=>{
        let pageNumbers = [];
        for ( let i = 1; i <= Math.ceil(listLength / usersPerPage); ++i ) {
            pageNumbers.push(i);
            // return pageNumbers;
        }
        return pageNumbers;
    }   
    return (
        <div className="pagination-container">
            <div className="pagination-item" onClick={()=> 
                pageNum > 1? paginate(pageNum - 1): null}>Previous</div>
            {getPageNumbersArray().map((number, index)=>
            <div key={index} className={`pagination-item ${currentPage===number? 'pagi-active': ''}`} onClick={()=> 
                paginate(number)}>{number}</div>)}
            <div className="pagination-item" onClick={()=> 
                pageNum < listLength ? paginate(pageNum + 1): null}>Next</div>
        </div>
    )
}

export default Pagination
