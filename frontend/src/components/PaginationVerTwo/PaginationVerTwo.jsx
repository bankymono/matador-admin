import React from 'react';
import ReactPaginate from 'react-paginate';
import './PaginationVerTwo.css';


const PaginationVerTwo = ({pageCount, handlePageClick}) => {
    return (
        <div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount/10}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination-container'}
                pageClassName={'pagination-item-li'}
                pageLinkClassName={'pagination-item-li-link'}
                previousClassName={'pagination-item-li'}
                previousLinkClassName={'pagination-item-li-link'}
                nextClassName={'pagination-item-li'}
                nextLinkClassName={'pagination-item-li-link'}
                breakClassName={'pagination-item-li'}
                breakLinkClassName={'pagination-item-li-link'}
                activeClassName={'pagi-active'}
            />
        </div>
    )
}

export default PaginationVerTwo
