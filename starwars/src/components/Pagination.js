import React from 'react';
// import Button from '@material-ui/core/Button';
import { Button } from 'reactstrap';


 const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumber = [];

    for(let i =1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <Button color="primary" size="lg" key={number} className="page-item">
                        <a onClick={()=> paginate(number)} href="!#" className="page-link">
                        {number}
                        </a>
                    </Button>
    ))}
            </ul>
        </nav>
    )
}

export default Pagination;
