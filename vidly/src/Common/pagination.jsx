import React from 'react';
import _ from 'lodash'; // to generate array
import PropTypes from 'prop-types';

const Pagination = props => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    // this lodash method is used to create an array starting from 1 upto expected limit
    const pages = _.range(1, pagesCount + 1) // +1 used because _.range doest not count nth number in array
    if (pagesCount === 1) return null;

    return <nav>
        <ul className="pagination">
            {pages.map(page => (
                <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}  >
                    <a className="page-link" onClick={() => { onPageChange(page) }}>{page}</a>
                </li>
            ))}
        </ul>
    </nav>;
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;  