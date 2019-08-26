import React from 'react';

import previous from '../../assets/images/previous.svg';
import next from '../../assets/images/next.svg';

const onClickNext = (e) => {
    console.log(e.target);
}

const onClickPrev = (e) => {
    console.log(e.target);
}

const Paginator = () => {
    return (
        <div className="paginator">
            <span className="previous-page">
                <img
                    src={previous}
                    alt={previous}
                    onClick={onClickPrev}        
                    >
                </img>  
            </span>
            <span className="page-count">
                <span>Page </span>
                <span className="current-page">2 </span>
                <span> of</span>
                <span className="total-pages"> 20</span>
            </span>
            <span className="previous-page">
                <img 
                    src={next}
                    alt={next}
                    onClick={onClickNext}        
                    >
                </img>  
            </span>        
        </div>
    )
}

export default Paginator;