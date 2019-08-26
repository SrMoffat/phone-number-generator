import React from 'react';

const Table = (props) => {
    const { numbers } = props;

    return (
        <div className="table">
            <div className=" row column-label">
                <span className="id-label">Entry</span>
                <span className="number-label">Number</span>
            </div>
            {
                // numbers.map((number, index) => (
                //    <div className="row" key={index} >
                //         <div className="">{index}</div>
                //         <div className="">{number}</div>
                //    </div>
                // ))
            }
        </div>
    );
}

export default Table;
